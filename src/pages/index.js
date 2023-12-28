import Image from "next/image";
import "./style.css";
import FriendsComponent from "../components/HomePage/FriendsComponent.jsx";

const friendsData = [
  {
    id: "1",
    side: "left",
    image: "friends/mathematics.png",
    name: "CAL",
    subtitle: "THE CALCULATOR",
    field: "financial mathematics",
    firstParaf:
      "Hey there, little mathematicians! I'm Calc the Cheerful Calculator, and I'm super excited to take you on an amazing adventure in \"Numberland.\" We'll have loads of fun playing games with numbers, learning how to add up our pocket money, and even figure out the best ways to save for those awesome toys we've been dreaming about!",
    second:
      "For Parents: Calc's module introduces essential financial concepts to children, including basic budgeting, understanding value for money, and the fundamentals of saving. It's designed to build a strong foundation in financial literacy, encouraging skills that are vital for sound money management in the future.",
  },
  {
    id: "2",
    side: "left",
    image: "friends/mathematics.png",
    name: "CAL",
    subtitle: "THE CALCULATOR",
    field: "financial mathematics",
    firstParaf: "",
    second: "paraf",
  },
  {
    id: "3",
    side: "left",
    image: "friends/mathematics.png",
    name: "CAL",
    subtitle: "THE CALCULATOR",
    field: "financial mathematics",
    firstParaf: "",
    second: "paraf",
  },
  {
    id: "4",
    side: "left",
    image: "friends/mathematics.png",
    name: "CAL",
    subtitle: "THE CALCULATOR",
    field: "financial mathematics",
    firstParaf: "",
    second: "paraf",
  },
  {
    id: "5",
    side: "left",
    image: "friends/mathematics.png",
    name: "CAL",
    subtitle: "THE CALCULATOR",
    field: "financial mathematics",
    firstParaf: "",
    second: "paraf",
  },
  {
    id: "6",
    side: "left",
    image: "friends/mathematics.png",
    name: "CAL",
    subtitle: "THE CALCULATOR",
    field: "financial mathematics",
    firstParaf: "",
    second: "paraf",
  },
];

function HomePage() {
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
            <p className="text">
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
        {friendsData.map((friend) => (
          <FriendsComponent key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
