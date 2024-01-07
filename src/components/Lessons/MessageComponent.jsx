import "./MessageComponent.css";
import Avatar from "@mui/material/Avatar";
import QuizComponent from "./QuizComponent";

function MessageComponent({ msg, land }) {
  const isAiMessage = msg.sender === "AI";
  const isQuiz = msg.sender === "Quiz";

  return (
    <div
      className={`messageContainer ${
        (isAiMessage || isQuiz) ? "aiMessage" : "userMessage"
      }`}
    >
      {(isAiMessage || isQuiz) && (
        <Avatar
          alt={land.friendName}
          src={land.friendImage}
          style={{ backgroundColor: "var(--yellow)" }}
        />
      )}
      <div className="messageTextContainer">
        {isQuiz ? (
          <div className="messageText"> 
          <QuizComponent quiz={msg.content}/>
           </div>
        ) : (
          <p style={{ whiteSpace: "pre-wrap" }} className="messageText">
            {msg.content
              .replace(/\"\\n/g, "")
              .replace(/\\n/g, "\n")
              .replace(/"/g, "")}
          </p>
        )}
      </div>
      {(!isAiMessage && !isQuiz) && (
        <Avatar
          alt={land.friendName}
          style={{ backgroundColor: "var(--purple)" }}
        />
      )}
    </div>
  );
}

export default MessageComponent;
