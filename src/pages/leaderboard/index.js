import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { getLeaderboard, getLeaderboardforUser } from "@/api"; // Assuming these are in a separate file
import { useAuth  } from "@/context/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
function LeaderboardComponent() {
  let [leaderboardData, setLeaderboardData] = useState([]);
  let [leaderboardDataForUser, setLeaderboardDataForUser] = useState([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    loadLeaderboardData(currentUser.username);
  }, []);

  useEffect(() => {
    console.log(leaderboardData);
    console.log(leaderboardDataForUser);
  }, [leaderboardData, leaderboardDataForUser]);

  const loadLeaderboardData = async (username) => {
    try {
      const leaderboardData = await getLeaderboard();
      console.log("AAAAAAAAAA",leaderboardData);
      setLeaderboardData(leaderboardData);

      const leaderboardDataForUser = await getLeaderboardforUser(username);
      console.log(leaderboardDataForUser);
      setLeaderboardDataForUser(leaderboardDataForUser);
    } catch (error) {
      console.error("Error geting leaderboard data:", error);
    }
  };

  return (
    <div>
      <Navbar/>
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
                #{leaderboardDataForUser.generalRank}
              </div>
              <div className="leaderboardTextyellow">
                {leaderboardDataForUser.username}
              </div>
              <div className="leaderboardTextyellow">
                {leaderboardDataForUser.country}
              </div>
              <div className="leaderboardTextyellow">
                {leaderboardDataForUser.totalPoints}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
}

export default LeaderboardComponent;
