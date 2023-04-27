import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvent from 'user.json'
export const App = () => {
  return (
    <div>
      <EventBoard event={upcomingEvent} />
    </div>
  );
};
