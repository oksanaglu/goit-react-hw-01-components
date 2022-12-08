import PropTypes from 'prop-types';
import css from './Profile.module.css'


export const Profile = ({ username, avatar, tag, location, stats: { followers, views, likes } }) => {
  return (
    <div class={css.cardProfile}>
      <div class={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          class={css.avatar}
        />
        <p class={css.userName}>{username}</p>
        <p class={css.tag}>{tag}</p>
        <p class={css.location}>{location}</p>
     
      </div>
    
      <ul class={css.stats}>
        <li class={css.statsItem}>
          <span class={css.label}>Followers</span>
          <span class={css.quantity}>{followers}</span>
        </li>
        <li class={css.statsItem}>
          <span class={css.label}>Views</span>
          <span class={css.quantity}>{views}</span>
        </li>
        <li class={css.statsItem}>
          <span class={css.label}>Likes</span>
          <span class={css.quantity}>{likes}</span>
        </li >
      </ul>
    </div>
  );

};

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};