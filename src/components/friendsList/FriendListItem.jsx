// src = .components/FriendsListitem.jsx
import css from "./FriendsList.module.css"


export default function FrendItem({friend}) {
  console.log(friend.name)
  const statusClass = friend.isOnline ? css.online : css.offline;
  //apply right css class dependіng on isOnline boolean
  return (
    <div>
      <img src={friend.avatar} alt={friend.name} width="52" />
      <p className={css.friendName}>{friend.name}</p>
      <p className={`${ css.friendStatus } ${statusClass}`}>{friend.isOnline ? "Online" : "Offline"}</p>
</div>
  )
}

