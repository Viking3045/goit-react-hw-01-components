import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvent from 'user.json';
import upcomingData from 'data.json';
export const App = () => {
  return (
    <div>
      <EventBoard event={upcomingEvent} data={upcomingData} />
    </div>
  );
};
