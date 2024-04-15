//src = ..App.jsx

import Profile from "./components/profile/Profile"
import userData from "../src/userData.json"
import friends from "../src/friends.json"
import FriendsList from "./components/FriendsList/FriendsList"
import TransactionHistory from "./components/transactions/TransactionsHistory"
import transactions from "./transactions.json"
import './App.css'

export default function App ()  {
 return (
 <>
   <Profile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
     />
     <FriendsList friendsList={friends} />
     <TransactionHistory transactions={transactions} />
 </>
 );
}

