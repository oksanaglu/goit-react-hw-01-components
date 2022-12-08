import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section class={css.cardStatistics}>
            <h2 class={css.title}>{title}</h2>

            <ul class={css.statList}>
                {stats.map(({ id, label, percentage }) =>
                    <li class={css.item} key={id}>
                        <span class={css.label}>{label}</span>
                        <span class={css.percentage}>{percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};