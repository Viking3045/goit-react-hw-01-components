import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionTable}>
         {transactions.map(({ id, type, amount, currency }) => (
        <TransactionTable
          key={id}
          id={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
       </tbody>
     
    </table>
  );
};
TransactionHistory.propTypes = {

  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
};
