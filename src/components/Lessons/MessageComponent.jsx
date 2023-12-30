import "./MessageComponent.css";

function MessageComponent({ msg }) {
  return (
   <div className="message">
    <p>{msg.content}</p>
    </div>
  );
}

export default MessageComponent;
