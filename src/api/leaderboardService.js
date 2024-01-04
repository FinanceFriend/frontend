import axios from "axios";

export const getLeaderboard = async (username) => {
  const response = await axios.get(
    `http://localhost:3001/api/leaderboard/general`
  );
  return response.data.leaderboard;
};

export const getLeaderboardforUser = async (username) => {
  const response = await axios.get(
    `http://localhost:3001/api/leaderboard/general/${username}`
  );
  return response.data.userData;
};
