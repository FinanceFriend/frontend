import "./FriendsComponent.css";

function FriendsComponent({ friend }) {
  // Determine the order based on friend.side
  const orderClass = friend.side === 'left' ? 'orderLeft' : 'orderRight';

  return (
    <div className={`friendsContainer ${friend.side}`}>
      <div className="friendsWrapper">
        <div className="friendsGrid">
          {friend.side === 'left' && (
            <div className="friendsFlex">
              <div className={`friendsFlex2 ${friend.side}`}>
                <img className="friendImage" src={friend.image} alt={friend.name} />
              </div>
            </div>
          )}
          <div className="friendsFlex">
            <div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p className="friendName text">{friend.name}</p>
                <p className="friendTitle text">{friend.title}</p>
              </div>
              <p className="friendField">{friend.field}</p>
            </div>
            <div>
              <p className="text friendText">{friend.firstText}</p>
              <p className="text friendText">{friend.secondText}</p>
            </div>
          </div>
          {friend.side === 'right' && (
            <div className="friendsFlex">
              <div className={`friendsFlex2 ${friend.side}`}>
                <img className="friendImage" src={friend.image} alt={friend.name} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendsComponent;
