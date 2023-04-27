import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
// import PropTypes from 'prop-types';
export const FriedList = ({ friends }) => {
//    console.log(friends)
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} id={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
</ul>
    )
}