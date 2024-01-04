import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
import { useRouter } from "next/router";
import LandDataContext from "../../context/LandDataContext";
import MessageComponent from "@/components/Lessons/MessageComponent";
import { getChatData, getLessons, getLessonsNames } from "@/api"; // Assuming these are in a separate file

function LessonsComponent() {
  let [chatData, setChatData] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [lessonNames, setLessonNames] = useState([]);
  const [miniLessonIndex, setMiniLessonIndex] = useState(1);
  const [error, setError] = useState(null);

  const landData = useContext(LandDataContext);
  const router = useRouter();
  const { slug } = router.query;
  const land = landData.find((item) => item.id === slug);

  const user = {
    username: "testuser123",
    email: "testuser123@example.com",
    password: "$2a$10$X9HSiIJ87b7Ty5qxSnr/BOKZR4GzChXWqciTdUFaPAP.i46Kn8OMy",
    dateOfBirth: { $date: { $numberLong: "631152000000" } },
    countryOfOrigin: "USA",
    preferredLanguage: "English",
  };

  useEffect(() => {
    loadChatData("testuser123", 0);
    loadLessonNames("Numberland");

    //loadLessons();
  }, []);

  useEffect(() => {
    console.log("AAAAA", lessonNames); // Check the structure of the data
  }, [lessonNames]);

  const reqMSG = {
    land: land,
    user: user,
    progress: 0,
    currentLesson: 0,
    currentMinilesson: 0,
    currentBlock: 0,
  };

  console.log(reqMSG);

  const loadChatData = async (username, locationId) => {
    try {
      const messages = await getChatData(username, locationId);
      console.log(messages);
      setChatData(messages);
    } catch (error) {
      console.error("Error geting chat data:", error);
      setError("Failed to load chat data");
    }
  };

  const loadLessonNames = async (landName) => {
    try {
      const lessonNames = await getLessonsNames(landName);
      console.log("BLABLA", lessonNames);
      setLessonNames(lessonNames);
    } catch (error) {
      console.error("Error geting chat data:", error);
      setError("Failed to load chat data");
    }
  };

  const loadLessons = async () => {
    try {
      const newLesson = await getLessons(miniLessonIndex);
      setLessons((currentLessons) => [...currentLessons, newLesson]);
      setMiniLessonIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Error geting lessons:", error);
      setError("Failed to load lessons");
    }
  };

  const landBackgrundImage = {
    background: `linear-gradient(0deg, rgba(22, 0, 160, 0.34) 0%, rgba(22, 0, 160, 0.34) 100%), url(${land.landImage}), lightgray 50% / cover no-repeat`,
  };

  const landBackgrundImageLessonsList = {
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), url(${land.friendImage}), lightgray 50% / cover no-repeat`,
  };

  return (
    <div className="lessonsWrapper">
      <div className="lessonsContainer">
        <div className="chatContainer">
          <div className="chatHeader">
            <p className="chatHeaderText">Current location: {land?.landName}</p>
          </div>
          <div style={landBackgrundImage} className="chatBodyContainer">
            <div className="chatBody">
              {chatData.map((msg, index) => (
                <div key={index}>
                  <MessageComponent key={index} msg={msg} land={land} />
                </div>
              ))}
              {chatData.map((msg, index) => (
                <div key={index}>
                  <MessageComponent key={index} msg={msg} land={land} />
                </div>
              ))}
            </div>
            <p className="chatButton nextButton">Next</p>
          </div>

          <div className="chatSendMessage">
            <div className="chatSendMessageContainer">
              <input className="inputMessage" type="text" />
              <p className="chatButton submitButton">Submit</p>
            </div>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="lessonsListContainer">
        <div className="chatContainer">
          <div className="chatHeader">
            <p className="chatHeaderText">Lessons list</p>
          </div>
          <div style={landBackgrundImageLessonsList} className="lessonsList">
            {lessonNames.map((lesson, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {lesson.lessonName}
                </p>
                <div style={{paddingLeft: '10px'}}>
                  {lesson.miniLessonsNames.map((miniLessonName, miniIndex) => (
                    <div key={miniIndex}>
                      {index + 1}.{miniIndex + 1} {miniLessonName}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsComponent;
