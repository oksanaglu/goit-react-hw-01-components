import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
// import css from './FriendList.module.css'
import { Container } from './FriendListItem.styled.jsx';

// export const FriendList = ({ friends }) => {
//     return (
//         <div className={css.container}>
//             {friends.map(({ id, avatar, name, isOnline }) => (
//                 <FriendListItem
//                    key={id}
//                    status={isOnline}
//                    avatar={avatar}
//                    name={name}
//                 />
                
//             ))}
//        </div>
//     );
// };

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
  );
};




FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};


