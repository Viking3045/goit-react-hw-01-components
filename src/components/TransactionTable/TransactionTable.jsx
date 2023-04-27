import css from './TransactionTable.module.css';
import PropTypes from 'prop-types';
export const TransactionTable = ({id, type, amount, currency}) => {
    return (
        <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
    )
} 
TransactionTable.propTypes = {
    id:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};