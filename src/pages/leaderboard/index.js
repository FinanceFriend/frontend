import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { fetchLeaderboard, fetchLeaderboardforUser } from "@/api"; // Assuming these are in a separate file
import { yellow } from "@mui/material/colors";

function LeaderboardComponent() {
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
        <div className="leaderboardContainer">
          <div className="leaderboardHeader">
            <p className="leaderboardHeaderText"></p>
          </div>
          <div className="leaderboardBodyContainer">
            <div className="leaderboardBody">
              <div className="leaderboardGrid">
                <div className="leaderboardHeaderText">RANK </div>
                <div className="leaderboardHeaderText">USERNAME</div>
                <div className="leaderboardHeaderText"> COUNTRY</div>
                <div className="leaderboardHeaderText"> POINTS</div>
              </div>
              {leaderboardData.map((user, index) => (
                <div key={index} className="leaderboardGrid">
                  <div
                    className="leaderboardText"
                    style={{
                      borderRadius: "50px",
                      backgroundColor:
                        user.username === leaderboardDataForUser.username
                          ? "var(--yellow)"
                          : "white",
                    }}
                  >
                    #{user.rank}
                  </div>
                  <div
                    className="leaderboardText"
                    style={{
                      backgroundColor:
                        user.username === leaderboardDataForUser.username
                          ? "var(--yellow)"
                          : "white",
                    }}
                  >
                    {user.username}
                  </div>
                  <div
                    className="leaderboardText"
                    style={{
                      backgroundColor:
                        user.username === leaderboardDataForUser.username
                          ? "var(--yellow)"
                          : "white",
                    }}
                  >
                    {user.countryOfOrigin}
                  </div>
                  <div
                    className="leaderboardText"
                    style={{
                      backgroundColor:
                        user.username === leaderboardDataForUser.username
                          ? "var(--yellow)"
                          : "white",
                    }}
                  >
                    {user.totalPoints}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="leaderboardDataForUserContainer">
            <div className="leaderboardDataForUserGrid">
              <div
                className="leaderboardTextyellow"
                style={{
                  borderRadius: "50px",
                }}
              >
                #{leaderboardDataForUser.rank}
              </div>
              <div className="leaderboardTextyellow">
                {leaderboardDataForUser.username}
              </div>
              <div className="leaderboardTextyellow">
                {leaderboardDataForUser.countryOfOrigin}
              </div>
              <div className="leaderboardTextyellow">
                {leaderboardDataForUser.totalPoints}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardComponent;
