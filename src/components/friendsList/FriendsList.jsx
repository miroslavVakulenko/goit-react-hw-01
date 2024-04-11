// src = .components/ FriendList.jsx
import css from "./FriendsList.module.css"

import FriendListItem from "./FriendListItem"

export default function FriendsList({ friendsList }) {
  // console.log(friendsList,"list arr")
  return (<ul className={css.friendsList}>
    {friendsList.map((friend) =>     
    (<li className={css.friendItem} key={friend.id}>
        <FriendListItem friend={friend} />
      </li>)
    )
    }
</ul>)
}
