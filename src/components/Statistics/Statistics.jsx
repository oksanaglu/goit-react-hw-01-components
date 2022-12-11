import PropTypes from 'prop-types';
import { Container, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Container>
      <Title>Upload stats</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};


