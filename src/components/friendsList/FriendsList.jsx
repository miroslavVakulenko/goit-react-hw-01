// src = .components/ FriendList.jsx
import FriendListItem from "./FriendListItem"

export default function FriendsList({ friendsList }) {
  // console.log(friendsList,"list arr")
  return (<ul>
    {friendsList.map((friend) =>     
      (<li key={friend.id}>
        <FriendListItem friend={friend} />
      </li>)
    )
    }
</ul>)
}
