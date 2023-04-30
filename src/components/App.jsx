import upcomingEvent from 'user.json';
import upcomingData from 'data.json';
import upcomingFriends from 'friends.json';
import upcomingTransactions from 'transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';

export const App = () => {
   const { username, tag, location, avatar, stats } = upcomingEvent;
  return (
    <div>
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
      <Statistics data={upcomingData} />
      <FriendList friends={upcomingFriends} />
      <TransactionHistory transactions={upcomingTransactions} />
    </div>
  );
};