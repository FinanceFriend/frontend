import axios from "axios";

export const fetchChatData = async (username, locationId) => {
  const response = await axios.get(`http://localhost:3001/api/chat`, {
    params: { username, location_id: locationId },
  });
  return response.data.messages;
};

export const fetchLessons = async (miniLessonIndex) => {
  const response = await axios.get("http://localhost:3001/langchain/lessons", {
    params: { lesson_index: 0, mini_lesson_index: miniLessonIndex },
  });
  return {
    position: "left",
    type: "text",
    title: "Olivia the owl",
    text: response.data.result,
  };
};