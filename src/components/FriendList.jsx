import FriendListItem from "./FriendListItem.jsx"
import s from './FriendListItem.module.css'
const FriendList = ({friends}) => {

    return (
        <ul className={s['friends-list']}>
            {friends.map(({id, ...rest})=>{
                return <li className={s.friend} key={id}>
                <FriendListItem {...rest}/>
            </li>})
            }
        </ul>
    );
};

export default FriendList;