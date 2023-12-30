import Link from 'next/link';
import "./style.css";
import FriendsComponent from "../components/HomePage/FriendsComponent.jsx";

import React, { useContext } from 'react';
import LandDataContext from '../context/LandDataContext';


function HomePage() {
  const landData = useContext(LandDataContext);

  return (
    <div>
      <div className="homepageTitleContainer">
        <img src="/icons/logo.png" alt="logo" />
        <div>
          <h1 className="homePageTitle">FinanceFriends</h1>
          <div className="buttonContainer">
            <button className="registerButton">Register</button>
            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
      <div>
        <div className="introContainer">
          <div className="introTextContainer">
            <p className="homePageText">
              This revolutionary chatbot is designed to engage and educate
              children in the nuances of financial literacy. Utilizing
              sophisticated artificial intelligence, Finance Friends offers
              interactive, personalized learning experiences, making complex
              financial concepts accessible and enjoyable for the younger
              generation. By blending advanced technology with child-friendly
              content, we&apos;re setting a new standard in empowering the
              financial leaders of tomorrow.
            </p>
          </div>
          <div className="">
            <img
              className="diagonal"
              src="/bg/bg-intro-diagonal.png"
              alt="logo"
            />
          </div>
          <div className="introDataContainer">
            <div className="introDataContent">
              <p className="introDataTitle">AI</p>
              <p className="introDataSubTitle">POWERED</p>
            </div>
            <div className="introDataContent">
              <p className="introDataTitle">6</p>
              <p className="introDataSubTitle">MODULES</p>
            </div>
            <div className="introDataContent">
              <p className="introDataTitle">1000+</p>
              <p className="introDataSubTitle">QUESTIONS</p>
            </div>
          </div>
        </div>
      </div>
      <p className="homePageTitle" style={{ marginLeft: "8%" }}>
        MEET THE FRIENDS:
      </p>
      <div>
        {landData.map((land) => (
          <FriendsComponent key={land.id} land={land} />
        ))}
      </div>
      <div className="buttonContainer">
      <Link href="/dashboard" passHref>
      <button className="loginButton">Let&apos;s Learn!</button>
    </Link>      </div>
    </div>
  );
}

export default HomePage;
