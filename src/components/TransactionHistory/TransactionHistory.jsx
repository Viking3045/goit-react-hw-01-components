import { type } from '@testing-library/user-event/dist/type';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({id, type, amount, currency}) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
</table>
    )
}
TransactionHistory.propTypes = {
    id:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};