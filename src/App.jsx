
import './App.css'
import userData from './userData.json'
import Profile from "./components/Profile.jsx";
import friends from "./friends.json"
import FriendList from "./components/FriendList.jsx"

function App() {
  return (
    <>
        <Profile name={userData.username}
                 tag={userData.tag}
                 location={userData.location}
                 image={userData.avatar}
                 stats={userData.stats}/>
        <FriendList friends={friends} />
    </>
  )
}

export default App
