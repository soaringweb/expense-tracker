import React from 'react';
import PropTypes from 'prop-types';

export default function TransactionCard({ id, text, amount, isExpense}) {

    return (
        <div id={id} className={isExpense ? 'transCard expenseCard' : 'transCard incomeCard' }>
            <span style={{ flexBasis: '80%'}}>{text}</span>
            <span style={{ flexBasis: '20%', textAlign: 'right'}}>{amount}</span>
        </div>
    )
}

TransactionCard.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    isExpense: PropTypes.bool.isRequired
}