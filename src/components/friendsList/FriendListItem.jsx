// src = .components/FriendsListitem.jsx


export default function FrendItem({friend}) {
  console.log(friend.name)
  return (
    <div>
      <img src={friend.avatar} alt={friend.name} width="48" />
  <p>Friend name</p>
  <p>{friend.isOnline ? "Online" : "Offline"}</p>
</div>
  )
}


// export default function FrendItem({avatar, name, isOnline, id}) {
//   console.log(name, avatar, isOnline, id)
//   return (
//     <div>
//   <img src="" alt="Avatar" width="48" />
//   <p>Friend name</p>
//   <p>Friend status</p>
// </div>
//   )
// }

