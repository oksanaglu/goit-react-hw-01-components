import PropTypes from 'prop-types';
import { Table, TableTitle, TableItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
      <thead>
        <TableTitle>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableTitle>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableItem key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableItem>
        ))}
      </tbody>
    </Table>
  );
};




TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

