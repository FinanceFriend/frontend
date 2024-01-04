import axios from "axios";

export const getChatData = async (username, locationId) => {
  const response = await axios.get(`http://localhost:3001/api/chat`, {
    params: { username, location_id: locationId },
  });
  return response.data.messages;
};

export const getLessons = async (miniLessonIndex) => {
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

export const getLessonsNames = async (locationName) => {
  const response = await axios.get(
    "http://localhost:3001/api/langchain/lessonNames", {
      params: { locationName: locationName },
    }
  );
 return response.data.message;
};
