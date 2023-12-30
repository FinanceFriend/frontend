import "./FriendsComponent.css";

function FriendsComponent({ land }) {
  return (
    <div className={`friendsContainer ${land.side}`}>
      <div className="friendsWrapper">
        <div className="friendsGrid">
          {land.side === 'left' && (
            <div className="friendsFlex">
              <div className={`friendsFlex2 ${land.side}`}>
                <img className="friendImage" src={land.friendImage} alt={land.friendName} />
              </div>
            </div>
          )}
          <div className="friendsFlex">
            <div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p className="friendName text">{land.friendName}</p>
                <p className="friendTitle text">{land.type}</p>
              </div>
              <p className="friendField">{land.field}</p>
            </div>
            <div>
              <p className="text friendText">{land.firstText}</p>
              <p className="text friendText">{land.secondText}</p>
            </div>
          </div>
          {land.side === 'right' && (
            <div className="friendsFlex">
              <div className={`friendsFlex2 ${land.side}`}>
                <img className="friendImage" src={land.friendImage} alt={land.friendName} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendsComponent;
