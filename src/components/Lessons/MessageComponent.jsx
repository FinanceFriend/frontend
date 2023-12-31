import "./MessageComponent.css";
import Avatar from "@mui/material/Avatar";

function MessageComponent({ msg, land }) {
  const isAiMessage = msg.sender === "AI";

  return (
    <div
      className={`messageContainer ${
        isAiMessage ? "aiMessage" : "userMessage"
      }`}
    >
      {isAiMessage && (
        <Avatar
          alt={land.friendName}
          src={land.friendImage}
          style={{ backgroundColor: "var(--yellow)" }}
        />
      )}
      <div className="messageTextContainer">
        <p className="messageText">{msg.content}</p>
      </div>
      {!isAiMessage && (
        <Avatar
          alt={land.friendName}
          style={{ backgroundColor: "var(--purple)" }}
        />
      )}
    </div>
  );
}

export default MessageComponent;
