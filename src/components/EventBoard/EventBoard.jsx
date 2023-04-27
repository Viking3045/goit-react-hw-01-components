import css from './EventBoard.module.css';
import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
export const EventBoard = ({ event }) => {
  // console.log(event)
  const { username, tag, location, avatar, stats } = event;
  // console.log(username)
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
  event: PropTypes.object.isRequired
};
