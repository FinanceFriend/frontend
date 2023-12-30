import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
import { useRouter } from "next/router";
import LandDataContext from "../../context/LandDataContext";
import MessageComponent from "@/components/Lessons/MessageComponent";
import { fetchChatData, fetchLessons } from "@/api"; // Assuming these are in a separate file

function LessonsComponent() {
  const [chatData, setChatData] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [miniLessonIndex, setMiniLessonIndex] = useState(1);
  const [error, setError] = useState(null);

  const landData = useContext(LandDataContext);
  const router = useRouter();
  const { slug } = router.query;
  const land = landData.find((item) => item.id === slug);

  useEffect(() => {
    loadChatData("username", 0);
    loadLessons();
  }, []);

  useEffect(() => {
    console.log(chatData); // Check the structure of the data
  }, [chatData]);

  const loadChatData = async (username, locationId) => {
    try {
      const messages = await fetchChatData(username, locationId);
      console.log(messages);
      setChatData(messages[0]);
    } catch (error) {
      console.error("Error fetching chat data:", error);
      setError("Failed to load chat data");
    }
  };

  const loadLessons = async () => {
    try {
      const newLesson = await fetchLessons(miniLessonIndex);
      setLessons((currentLessons) => [...currentLessons, newLesson]);
      setMiniLessonIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      setError("Failed to load lessons");
    }
  };

  const landBackgrundImage = {
    background: `linear-gradient(0deg, rgba(22, 0, 160, 0.34) 0%, rgba(22, 0, 160, 0.34) 100%), url(${land.landImage}), lightgray 50% / cover no-repeat`,
  };

  return (
    <div className="lessonsWrapper">
      {slug}
      <div className="lessonsContainer">
        <div className="chatContainer">
          <div className="chatHeader">
            <p className="chatHeaderText">Current location: {land?.landName}</p>
          </div>
          <div
            style={landBackgrundImage}
            className="chatBody"
          >
            {chatData.map((msg, index) => (
              <div key={index}>
                <MessageComponent key={index} msg={msg} />
              </div>
            ))}
            {chatData.map((msg, index) => (
              <div key={index}>
                <MessageComponent key={index} msg={msg} />
              </div>
            ))}
          </div>
          <div className="chatSendMessage">MESSAGE</div>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default LessonsComponent;
