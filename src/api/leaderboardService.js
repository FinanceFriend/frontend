import axios from "axios";

export const getLeaderboard = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/leaderboard`
  );
  return response.data.leaderboard;
};

export const getLeaderboardforUser = async (username) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/leaderboard/${username}`
  );
  console.log(response)
  return response.data.userData;
};
