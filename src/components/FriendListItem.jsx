import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
    console.log("FriendListItem props:", { avatar, name, isOnline })
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            {isOnline? <p className={s.online}>"Online"</p>: <p className={s.offline}>Offline</p>}
        </div>
    );
};

export default FriendListItem;