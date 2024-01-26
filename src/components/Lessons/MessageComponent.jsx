import "./MessageComponent.css";
import Avatar from "@mui/material/Avatar";
import QuizComponent from "./QuizComponent";

function MessageComponent({ msg, land, user }) {
  const isUserMessage = msg.sender === "User";
  const isQuiz = msg.sender === "Quiz";

  const isImage = msg.content.includes("https://oaidalleapiprodscus.blob.core.windows.net/private/org");

  return (
    <div
      className={`messageContainer ${
        !isUserMessage ? "aiMessage" : "userMessage"
      }`}
    >
      {!isUserMessage && (
        <Avatar
          alt={land.friendName}
          src={land.friendImage}
          style={{ backgroundColor: "var(--yellow)" }}
        />
      )}
      <div className="messageTextContainer">
        {isQuiz ? (
          <div className="messageText">
            <QuizComponent quiz={msg.content} user={user} land={land} />
          </div>
        ) : isImage ? (
          <img height={400}
            src={msg.content
              .replace(/\"\\n/g, "")
              .replace(/\\n/g, "\n")
              .replace(/"/g, "")
              .trim()}
          ></img>
        ) : (
          <p style={{ whiteSpace: "pre-wrap" }} className="messageText">
            {msg.content
              .replace(/\"\\n/g, "")
              .replace(/\\n/g, "\n")
              .replace(/"/g, "")
              .trim()}
          </p>
        )}
      </div>
      {isUserMessage && (
        <Avatar
          alt={land.friendName}
          style={{ backgroundColor: "var(--purple)" }}
        />
      )}
    </div>
  );
}

export default MessageComponent;
