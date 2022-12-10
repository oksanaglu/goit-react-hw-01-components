import PropTypes from 'prop-types';
import { Card, Description, Avatar, UserName, UserTag, Userlocation, StatsList, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <Userlocation>{location}</Userlocation>
      </Description>

      <StatsList class="stats">
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};