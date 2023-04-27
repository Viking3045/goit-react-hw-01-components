import css from './StatList.module.css';
import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';

export const StatList = ({ data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => (
          <Statistics key={id} id={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
StatList.propTypes = {
  data: PropTypes.array.isRequired,
};
