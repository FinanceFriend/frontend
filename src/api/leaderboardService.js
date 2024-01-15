import axios from "axios";

export const getLeaderboard = async () => {
  const response = await axios.get(
    `http://localhost:3001/api/leaderboard`
  );
  return response.data.leaderboard;
};

export const getLeaderboardforUser = async (username) => {
  const response = await axios.get(
    `http://localhost:3001/api/leaderboard/${username}`
  );
  console.log(response)
  return response.data.userData;
};
