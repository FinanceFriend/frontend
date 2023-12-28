import Link from 'next/link';
import "./style.css";
import FriendsComponent from "../components/HomePage/FriendsComponent.jsx";

const friendsData = [
  {
    id: "1",
    side: "left",
    image: "/friends/mathematics.png",
    name: "CAL",
    title: "THE CALCULATOR",
    field: "financial mathematics",
    firstText:
      "Hey there, little mathematicians! I'm Calc the Cheerful Calculator, and I'm super excited to take you on an amazing adventure in \"Numberland.\" We'll have loads of fun playing games with numbers, learning how to add up our pocket money, and even figure out the best ways to save for those awesome toys we've been dreaming about!",
    secondText:
      "For Parents: Calc's module introduces essential financial concepts to children, including basic budgeting, understanding value for money, and the fundamentals of saving. It's designed to build a strong foundation in financial literacy, encouraging skills that are vital for sound money management in the future.",
  },
  {
    id: "2",
    side: "right",
    image: "friends/saving.png",
    name: "OLIVIA",
    title: "THE OWL",
    field: "saving",
    firstText: "Hello, my savvy savers! I'm Hootie the Wise Saving Owl, and I can't wait to share the secrets of \"Savings Treehouse\" with you. We're going to learn all about saving money, finding fun ways to watch our piggy banks get fuller, and dreaming about all the cool things we can do with our savings!",
    secondText: "For Parents: In Hootie's module, children will delve into the practice of saving, differentiating between needs and wants, and the importance of emergency funds. The lessons are geared towards fostering sound saving habits from an early age, emphasizing financial security and long-term planning.",
  },
  {
    id: "3",
    side: "left",
    image: "friends/taxes.png",
    name: "TIMMY",
    title: "THE TURTLE",
    field: "taxes",
    firstText: "Hello, young explorers! I'm Timmy the Tax-Smart Turtle, and I'm here to take you on an exciting journey through \"Taxtown.\" Together, we'll learn about the mysterious world of taxes in a super fun and easy way. We'll discover why our families pay taxes, and how they help build parks, schools, and so much more!",
    secondText: "For Parents: This module provides a basic introduction to taxes, helping children understand their significance in everyday life, including sales and income tax. It's crafted to instill a sense of responsibility and community awareness, laying the groundwork for informed and responsible future citizens.",
  },
  {
    id: "4",
    side: "right",
    image: "friends/loans.png",
    name: "FIONA",
    title: "THE FOX",
    field: "investing",
    firstText: "Hi, future money maestros! I'm Finn the Friendly Fox, and I'm here in \"Investment Woods\" to show you how to make your money do amazing tricks! We're going to learn all about investments, watch money grow, and have a blast understanding the smart ways to use our savings.",
    secondText: "For Parents: Finn's module demystifies investing for young learners, covering the basics of stocks, bonds, and the need for diversification. It provides an engaging introduction to financial growth concepts and the significance of strategic long-term planning.",
  },
  {
    id: "5",
    side: "left",
    image: "friends/investing.png",
    name: "BART",
    title: "THE BEAVER",
    field: "financial mathematics",
    firstText: "Hey there, friends! I'm Bucky the Build-It Beaver, and I'm super excited to help you understand the world of loans here at \"Loan Lake.\" We'll learn about borrowing money for important things and discover how to plan for our big dreams and future projects!",
    secondText: "For Parents: Bucky's module educates children on the principles of loans, including the concept of interest rates and the importance of credit scores. It aims to teach responsible borrowing habits and the impact of these financial decisions on future opportunities.",
  },
  {
    id: "6",
    side: "right",
    image: "friends/freeform.png",
    name: "CLEO",
    title: "THE CHAMELEON",
    field: "freestyle",
    firstText: "Hello, creative minds! I'm Chroma the Colorful Chameleon from \"Imagination Jungle.\" Let's have a blast exploring all the different and fun ways we can think about money. From setting up a lemonade stand to saving for something special, we'll use our creativity to make our financial dreams come true!",
    secondText: "For Parents: Chroma's module is designed to inspire creative thinking about finance, covering topics like entrepreneurship, ethical spending, and philanthropy. It encourages children to view money as a tool for creativity, personal expression, and making a positive impact in the world.",
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
        {friendsData.map((friend) => (
          <FriendsComponent key={friend.id} friend={friend} />
        ))}
      </div>
      <div className="buttonContainer">
      <Link href="/lessons" passHref>
      <button className="loginButton">Let&apos;s Learn!</button>
    </Link>      </div>
    </div>
  );
}

export default HomePage;
