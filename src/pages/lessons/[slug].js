import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useRouter } from "next/router";
import LandDataContext from "../../context/LandDataContext";
import MessageComponent from "@/components/Lessons/MessageComponent";
import {
  getChatData,
  getLessonMessage,
  getLessonsNames,
  getUserMessage,
} from "@/api";
import LessonsListComponent from "@/components/Lessons/LessonsListComponent";
import Navbar from "@/components/Navbar/Navbar";
import { useAuth } from "@/context/AuthProvider";

function LessonsComponent() {
  let [chatData, setChatData] = useState([]);
  const [lessonNames, setLessonNames] = useState([]);
  const [error, setError] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const landData = useContext(LandDataContext);
  
  const router = useRouter();
  const { slug } = router.query;
  const land = landData.find((item) => item.id === slug);

  const [currentBlock, setCurrentBlock] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentMinilesson, setCurrentMinilesson] = useState(0);
  let progress = 0;

  const [landBackgroundImage, setLandBackgroundImage] = useState({});

  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  const loadingMessage = {
    sender: "AI",
    content: "typing...",
  };

  useEffect(() => {
    if (currentUser === null) {
      return;
    }

    if (currentUser === undefined) {
      router.push("/login");
    } else {
      if (router.isReady && slug) {
        const land = landData.find((item) => item.id === slug);
        if (land) {
          setLandBackgroundImage({
            background: `linear-gradient(0deg, rgba(22, 0, 160, 0.34) 0%, rgba(22, 0, 160, 0.34) 100%), url(${land.landImage}), lightgray 50% / cover no-repeat`,
          });
          loadChatData(currentUser.username, 0);
          loadLessonNames(land.name);
        }
      }
    }
  }, [currentUser, landData, router, slug]);

  const loadChatData = async (username, locationId) => {
    try {
      let messages = await getChatData(username, locationId);
      console.log(messages);

      // reverse array so we can have auto-scroll to bottom when message is added (flex-direction: column-reverse)
      messages = messages.reverse();

      setChatData(messages);
    } catch (error) {
      console.error("Error geting chat data:", error);
      setError("Failed to load chat data");
    }
  };

  const loadLessonNames = async (name) => {
    try {
      const lessonNames = await getLessonsNames(name);
      console.log("BLABLA", lessonNames);
      setLessonNames(lessonNames);
    } catch (error) {
      console.error("Error geting chat data:", error);
      setError("Failed to load chat data");
    }
  };

  const loadLessons = async () => {
    setLoading(true);
    let newCurrentBlock = currentBlock + 1;
    let newCurrentMinilesson = currentMinilesson;

    if (newCurrentBlock == 3) {
      newCurrentBlock = 0;
      newCurrentMinilesson += 1;
      setCurrentMinilesson(newCurrentMinilesson);
    }

    setCurrentBlock(newCurrentBlock);

    console.log(currentBlock);

    try {
      const lessonMessage = await getLessonMessage(
        currentBlock,
        currentLesson,
        currentMinilesson,
        progress,
        land,
        currentUser
      );

      console.log("LESSONMSG", lessonMessage.message);

      let newMessage = {
        sender: "AI",
        content: lessonMessage.message,
      };

      if (currentBlock == 2) {
        newMessage.sender = "Quiz";
      }

      setChatData([newMessage, ...chatData]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching lesson message:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      setLoading(true);

      // Add the user's message immediately
      const newUserMessage = {
        sender: "User",
        content: inputValue,
      };

      setChatData((currentChatData) => [newUserMessage, ...currentChatData]);
      setInputValue(""); // Reset the input field

      // Now make the API call
      const response = await getUserMessage(
        currentLesson,
        currentMinilesson,
        currentUser,
        land,
        inputValue
      );

      let newAIResponse = {
        sender: "AI",
        content: response.message,
      };

      // Update the chat data again with the AI's response
      setChatData((currentChatData) => [newAIResponse, ...currentChatData]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user message:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="lessonsWrapper">
        <div className="lessonsContainer">
          <div className="chatContainer">
            <div className="chatHeader">
              <p className="chatHeaderText">Current location: {land?.name}</p>
            </div>
            <div style={landBackgroundImage} className="chatBodyContainer">
              <div className="chatBody">
                {loading && (
                  <div>
                    <MessageComponent
                      msg={loadingMessage}
                      land={land}
                      user={currentUser}
                    />
                  </div>
                )}

                {chatData.map((msg, index) => (
                  <div key={index}>
                    <MessageComponent
                      key={index}
                      msg={msg}
                      land={land}
                      user={currentUser}
                    />
                  </div>
                ))}
              </div>
              <p
                className="chatButton nextButton"
                onClick={() => loadLessons()}
              >
                Next
              </p>
            </div>

            <div className="chatSendMessage">
              <div className="chatSendMessageContainer">
                <input
                  className="inputMessage"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <p
                  className="chatButton submitButton"
                  onClick={handleSearchClick}
                >
                  Submit
                </p>
              </div>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
        <LessonsListComponent lessonNames={lessonNames} land={land} />
      </div>
    </>
  );
}

export default LessonsComponent;
