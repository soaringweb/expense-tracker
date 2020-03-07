import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './TransactionCard';

export default function History( { transactions }) {
    return (
        <div className='container'>
            <div className='subTitle' style={{ borderBottom: '1px solid #AAA', textTransform: 'none' }}>History</div>
            {transactions.map(trans => <TransactionCard key={trans.id} {...trans} />) }
        </div>
    )
}

History.propTypes = {
    transactions: PropTypes.array.isRequired
}
