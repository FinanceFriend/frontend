import React, { useState, useEffect } from "react";
import "./style.css";
import { getLeaderboard, getLeaderboardforUser } from "@/api"; // Assuming these are in a separate file
import { useAuth } from "@/context/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import CountrySelect from "@/components/Register/CountrySelect";

function LeaderboardComponent() {
  let [leaderboardData, setLeaderboardData] = useState([]);
  let [leaderboardDataForUser, setLeaderboardDataForUser] = useState([]);

  let [countrySelect, setCountrySelect] = useState();

  const { currentUser } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (currentUser === undefined) {
      router.push("/login");
    }
  }, [currentUser, router]);

  useEffect(() => {
    if (currentUser) {
      loadLeaderboardData(currentUser.username);
    }
  }, [currentUser]); 

  const handleInputChange = (e) => {
    console.log(e)
    setCountrySelect(e.value)
  };
  
  const loadLeaderboardData = async (username) => {
    try {
      const leaderboardData = await getLeaderboard();
      console.log("AAAAAAAAAA", leaderboardData);
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
      <Navbar />
      <div className="lessonsWrapper">
        <div className="lessonsContainer">
          <div className="leaderboardContainer">
            <div className="leaderboardHeader">
            <p className="filtersText">Filters:</p>
            <CountrySelect
                  placeholder="Country of Origin"
                  name="countryOfOrigin"
                  value={countrySelect}
                  onChange={handleInputChange}
                />
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
      </div>
    </div>
  );
}

export default LeaderboardComponent;
