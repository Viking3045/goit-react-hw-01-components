import css from './EventBoard.module.css';
import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
export const EventBoard = ({ event, data, friends, transactions }) => {
// console.log(transactions)
  // console.log(event)
  // console.log(data)
  // console.log(friends)
  // const { id, label, percentage } = data;
  const { username, tag, location, avatar, stats,   } = event;
  // console.log(username)
  // console.log(id);
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
      <h2 className={css.title}>Upload stats</h2>
      {data.map(({ id, label, percentage }) => (
        <Statistics key={id} id={id} label={label} percentage={percentage} />
      ))}
      <FriendList friends={friends} />
           {transactions.map(({id, type, amount, currency}) => (
        <TransactionHistory key={id} id={id} type={type} amount={amount} currency={currency} />
      ))}
    </div>
  );
};
// EventBoard.propTypes = {
//   event: PropTypes.objectOf(
//     PropTypes.exact({
//       username: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       stats:  PropTypes.exact({
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//       }),
//     }),
//   ),
// };
EventBoard.propTypes = {
  event: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired,
};

