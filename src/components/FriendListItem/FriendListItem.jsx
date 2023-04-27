import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? `${css.status}` : `${css.isOnline}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
