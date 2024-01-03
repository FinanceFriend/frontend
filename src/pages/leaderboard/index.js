import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { fetchLeaderboard, fetchLeaderboardforUser } from "@/api"; // Assuming these are in a separate file

function LessonsComponent() {
  let [leaderboardData, setLeaderboardData] = useState([]);
  let [leaderboardDataForUser, setLeaderboardDataForUser] = useState([]);

  useEffect(() => {
    loadLeaderboardData("user123");
  }, []);

  useEffect(() => {
    console.log(leaderboardData); // Check the structure of the data
    console.log(leaderboardDataForUser); // Check the structure of the data
  }, [leaderboardData, leaderboardDataForUser]);

  const loadLeaderboardData = async (username) => {
    try {
      const leaderboardData = await fetchLeaderboard();
      console.log(leaderboardData);
      setLeaderboardData(leaderboardData);

      const leaderboardDataForUser = await fetchLeaderboardforUser(username);
      console.log(leaderboardDataForUser);
      setLeaderboardDataForUser(leaderboardDataForUser);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      setError("Failed to load leaderboard data");
    }
  };

  return (
    <div className="lessonsWrapper">
      <div className="lessonsContainer">
        <div className="chatContainer">
          <div className="chatHeader">
            <p className="chatHeaderText">Current location:</p>
          </div>
          <div className="chatBodyContainer">
            <div className="chatBody">
    
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
        </div>
    </div>
  );
}

export default LessonsComponent;
