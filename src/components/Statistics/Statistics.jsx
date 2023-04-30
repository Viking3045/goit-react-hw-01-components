import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
   }) 
  ),
  title: PropTypes.string
};
