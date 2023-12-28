import "./FriendsComponent.css";

function FriendsComponent({ friend }) {
  return (
    <div className="friendsContainer">
      <div className="friendsWrapper">
        <div className="friendsGrid">
        <div className="friendsFlex">
            <div>
            <img className="" src={friend.image} alt="logo" />
            </div>
        </div>
          <div className="friendsFlex">
            <div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p className="friendName text">{friend.name}</p>
                <p className="friendTitle text">{friend.title}</p>
              </div>
              <p className="friendField">{friend.field}</p>
            </div>
            <div>
              <p className="text friendText ">{friend.firstText}</p>
              <p className="text friendText ">{friend.secondText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsComponent;
