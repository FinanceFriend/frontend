import React, { useEffect, useState, Component } from "react";
import ".//Profile.css";
import { LinearProgress } from "@mui/material";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { useAuth } from "@/context/AuthProvider";
import { fetchUserStats } from "@/api/userService";
import { useRouter } from "next/router";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeUsernameModal from "./ChangeUsernameModal";

const UserProfileStats = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);

  const openChangePasswordModal = () => {
    setChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
  };  

  const router = useRouter();

  const { currentUser } = useAuth();

  useEffect(() => {
    console.log(currentUser);
    if (currentUser === null) {
      return;
    }

    if (currentUser === undefined) {
      router.push("/login");
    } else {
      loadChatData(currentUser.username);
    }
  }, [currentUser, router]);

  const [userStats, setUserStats] = useState({
    username: "",
    name: "",
    email: "",
    dob: "",
    numberlandPts: "",
    progress: "",
  });

  userStats.username = "martina";
  userStats.name = "Martina Rodic";
  userStats.email = "martina@example.com";
  userStats.dob = "10/07/2001";
  userStats.country = "Croatia";
  userStats.progress = "50";

  const loadChatData = async (username) => {
    try {
      const response = await fetchUserStats(username);
      console.log("PROFILE", response.statsResponse);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="my-profile">
        <h3>My profile</h3>
      </div>
      <div className="profile-info-settings">
        <div className="profile-info">
          <h3 className="h3-title">Profile info:</h3>
          <div className="user-info-details">
            <img src="/pfp/pfp.png" alt="pfp" />
            <div id="user-info-text-details">
              <h3>{userStats.name}</h3>
              <ul>
                <li>
                  <b>e-mail:</b> {userStats.email}
                </li>
                <li>
                  <b>date of birth:</b> {userStats.dob}
                </li>
                <li>
                  <b>country:</b> {userStats.country}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="settings">
          <h3>Settings:</h3>
          <div className="settings-list">
            <ul>
              <li><ChangeUsernameModal/></li>
              <li><ChangePasswordModal/>
               </li>
              <li>Reset progress</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-profile">
        <h3>My stats</h3>
      </div>
      <div className="all-stats-bars">
        <div className="text-total-bar">

            <h3>Game completion:</h3>

          <div className="element">
            <div id="prog-bar1">
              <div className="bar">
                <SemiCircleProgressBar
                  percentage={33}
                  stroke="#00FF66"
                  strokeWidth={16}
                  background="#fff"
                  diameter={210}
                />
              </div>
              <div>
                <div className="progress-text">
                  <p>Overall completion</p>
                </div>
                <div className="percentage">
                  <p>{userStats.progress}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-land-bar">
          <ul>
            <li>
              <div id="prog-bar2">
                <div className="bar2">
                  <SemiCircleProgressBar
                    percentage={33}
                    stroke="#FFC700"
                    strokeWidth={16}
                    background="#fff"
                    diameter={160}
                  />
                </div>
                <div className="land-text">
                  <p>Numberland</p>
                </div>
                <div className="percentage">
                  <p>{userStats.progress}%</p>
                </div>
              </div>
            </li>

            <li>
              <div id="prog-bar2">
                <div className="bar">
                  <SemiCircleProgressBar
                    percentage={33}
                    stroke="#FFC700"
                    strokeWidth={16}
                    background="#fff"
                    diameter={160}
                  />
                </div>
                <div className="land-text">
                  <p>Savings Treehouse</p>
                </div>
                <div className="percentage">
                  <p>{userStats.progress}%</p>
                </div>
              </div>
            </li>
            <li>
              <div id="prog-bar2">
                <div className="bar">
                  <SemiCircleProgressBar
                    percentage={33}
                    stroke="#FFC700"
                    strokeWidth={16}
                    background="#fff"
                    diameter={160}
                  />
                </div>
                <div className="land-text">
                  <p>TaxTown</p>
                </div>
                <div className="percentage">
                  <p>{userStats.progress}%</p>
                </div>
              </div>
            </li>
            <li>
              <div id="prog-bar2">
                <div className="bar">
                  <SemiCircleProgressBar
                    percentage={33}
                    stroke="#FFC700"
                    strokeWidth={16}
                    background="#fff"
                    diameter={160}
                  />
                </div>
                <div className="land-text">
                  <p>Investment Woods</p>
                </div>
                <div className="percentage">
                  <p>{userStats.progress}%</p>
                </div>
              </div>
            </li>
            <li>
              <div id="prog-bar2">
                <div className="bar">
                  <SemiCircleProgressBar
                    percentage={33}
                    stroke="#FFC700"
                    strokeWidth={16}
                    background="#fff"
                    diameter={160}
                  />
                </div>
                <div className="land-text">
                  <p>Loan Lake</p>
                </div>
                <div className="percentage">
                  <p>{userStats.progress}%</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="point-count">
        <div className="points-overall">
          <h3>Points:</h3>
          <div className="element">
            <p id="overall-numb">4260</p>
            <p id="overall-txt">overall</p>
          </div>
        </div>
        <div className="land-points">
          <div className="element">
            <p className="each-land-points">353</p>
            <p className="each-land-txt">Numberland</p>
          </div>
          <div className="element">
            <p className="each-land-points">353</p>
            <p className="each-land-txt">savings treehouse</p>
          </div>
          <div className="element">
            <p className="each-land-points">353</p>
            <p className="each-land-txt">taxTown</p>
          </div>
          <div className="element">
            <p className="each-land-points">353</p>
            <p className="each-land-txt">investment woods</p>
          </div>
          <div className="element">
            <p className="each-land-points">353</p>
            <p className="each-land-txt">loan lake</p>
          </div>
        </div>
      </div>
      <div className="quizzes">
        <div id="quizzes-text">
          <h3>Quizzes:</h3>
        </div>
        <div className="group">
          <div id="incorrect-answers">
            <p className="incorrect-answers-num">353</p>
            <p className="incorrect-answers-txt">incorrect answers</p>
          </div>
          <div id="prog-bar1">
            <div className="bar">
            <SemiCircleProgressBar
              percentage={33}
              stroke="#00FF66"
              strokeWidth={16}
              background="#fff"
              diameter={210}
            /></div>
            <div className="progress-text">Percentage correct</div>
            <div className="percentage">40%</div>
          </div>
          <div id="correct-answers">
            <p className="correct-answers-num">353</p>
            <p className="correct-answers-txt">correct answers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileStats;
