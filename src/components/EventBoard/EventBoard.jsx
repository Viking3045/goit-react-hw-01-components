import css from './EventBoard.module.css';
import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import { StatList } from 'components/StatList/StatList';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
export const EventBoard = ({ event, data, friends, transactions }) => {
  const { username, tag, location, avatar, stats } = event;
  return (
    <div className={css.person}>
      <Profile
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <StatList data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
EventBoard.propTypes = {
  event: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired,
};
