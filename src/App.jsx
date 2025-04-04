
import './App.css'
import userData from './userData.json'
import Profile from "./components/Profile.jsx";
import friends from "./friends.json"
import FriendList from "./components/FriendList.jsx"
import transactions from './transactions.json'
import TransactionHistory from "./components/TransactionHistory.jsx"

function App() {
  return (
    <>
        <Profile name={userData.username}
                 tag={userData.tag}
                 location={userData.location}
                 image={userData.avatar}
                 stats={userData.stats}/>
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
    </>
  )
}

export default App
