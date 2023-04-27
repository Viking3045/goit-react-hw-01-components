import css from './Statistics.module.css'
import PropTypes from 'prop-types';
export const Statistics = ({ id, label, percentage }) => {
    return (
        <section className={css.statistics}>
            {/* <h2 className={css.title}>Upload stats</h2> */}

            <ul className={css.statList}>
                <li className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>
                {/* <li className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>
                     <li className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>
                     <li className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li> */}
            </ul>
        </section>
    );
};
Statistics.propTypes = {
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
};