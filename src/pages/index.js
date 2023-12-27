import Image from "next/image";
import "./style.css";

function HomePage() {
  return (
    <div>
      <div className="homepageTitleContainer">
        <Image src="/icons/logo.png" alt="logo" width={500} height={500} />
        <div>
          <h1 className="homePageTitle">FinanceFriends</h1>
          <div className="buttonContainer">
            <button className="registerButton">Register</button>
            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
      <div className="introContainer">
        <div style={{padding: "10px"}}>
          <p className="text">
            This revolutionary chatbot is designed to engage and educate
            children in the nuances of financial literacy. Utilizing
            sophisticated artificial intelligence, Finance Friends offers
            interactive, personalized learning experiences, making complex
            financial concepts accessible and enjoyable for the younger
            generation. By blending advanced technology with child-friendly
            content, we&apos;re setting a new standard in empowering the financial
            leaders of tomorrow.
          </p>
        </div>
        <div>
          <p>AI</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
