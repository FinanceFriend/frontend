import axios from "axios";

export const getChatData = async (username, locationId) => {
  const response = await axios.get(`http://localhost:3001/api/chat`, {
    params: { username, location_id: locationId },
  });
  return response.data.messages;
};

export const getLessonMessage = async (
  currentBlock,
  currentLesson,
  currentMinilesson,
  progress,
  land,
  user
) => {
  const requestBody = {
    currentBlock,
    currentLesson,
    currentMinilesson,
    progress,
    land,
    user,
  };

  console.log(requestBody);

  const response = await axios.post(
    "http://localhost:3001/api/langchain/lessonMessage",
    requestBody
  );
  return response.data;
};

export const getLessonsNames = async (locationName) => {
  const response = await axios.get(
    "http://localhost:3001/api/langchain/lessonNames",
    {
      params: { locationName: locationName },
    }
  );
  return response.data.message;
};

export const getUserMessage = async (
  currentLesson,
  currentMinilesson,
  user,
  land,
  message
) => {
  const requestBody = {
    currentLesson,
    currentMinilesson,
    user,
    land,
    message,
  };

  console.log(requestBody);

  const response = await axios.post(
    "http://localhost:3001/api/langchain/userMessage",
    requestBody
  );
  return response.data;
};

export const evaluateQuestion = async (question, userAnswer, user) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/langchain/evaluateQuestion",
      {
        user,
        question: question.question,
        userAnswer,
        correctAnswerExample: question.correct_answer,
      }
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error evaluating answer:", error);
    return { success: false };
  }
};
