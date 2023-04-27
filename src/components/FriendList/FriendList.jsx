import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
// import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
//    console.log(friends)
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} id={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
</ul>
    )
}
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};