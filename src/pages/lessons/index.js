import React, { useState } from "react";
import axios from "axios";
import { MessageList } from "react-chat-elements";
import "../style.css";

function LessonsComponent() {
  const [lessons, setLessons] = useState([]);
  const [miniLessonIndex, setMiniLessonIndex] = useState(1); // Initialize miniLessonIndex

  const fetchLessons = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/langchain/lessons",
        {
          params: {
            lesson_index: 0,
            mini_lesson_index: miniLessonIndex, // Use the state variable
          },
        }
      );

      const newLesson = {
        position: "left",
        type: "text",
        title: "Olivia the owl",
        text: response.data.result, // Assuming response.data is the message you want
      };

      // Append new lesson to the existing lessons array
      setLessons((currentLessons) => [...currentLessons, newLesson]);
      setMiniLessonIndex((prevIndex) => prevIndex + 1); // Increment miniLessonIndex by 1
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  return (
    <div className="lessonsContainer">
      <div className="lessonsWrapper">
        <button className="loginButton" onClick={fetchLessons}>
          Next
        </button>

        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={lessons}
        />
      </div>{" "}
    </div>
  );
}

export default LessonsComponent;
