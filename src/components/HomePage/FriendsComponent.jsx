import './FriendsComponent.css'


function FriendsComponent({ friend }) {
  return (
    <div class="friendsContainer">
      <h2>{friend.name}</h2>
    </div>
  );
}

export default FriendsComponent;
