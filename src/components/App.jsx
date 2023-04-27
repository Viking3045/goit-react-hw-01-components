import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvent from 'user.json';
import upcomingData from 'data.json';
import upcomingFriends from 'friends.json';
import upcomingTransactions from 'transactions.json';
export const App = () => {
  return (
    <div>
      <EventBoard event={upcomingEvent} data={upcomingData} friends={upcomingFriends} transactions={upcomingTransactions} />
    </div>
  );

};
