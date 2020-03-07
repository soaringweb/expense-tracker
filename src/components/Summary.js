import React from 'react';
import PropTypes from 'prop-types'

const container = {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: '20px 30px',
    boxShadow: '1px 2px 5px 0px #BBB',
    textAlign: 'center'
}

const incomeStyle = {
    marginRight: '5px',
    lineHeight: '1.1em'
}

const expenseStyle = {
    marginLeft: '5px',
    lineHeight: '1.1em'
}

export default function Summary( { income, expense} ) {
    return (
        <div className='container' style={container}>
            <div style={incomeStyle}>
                <div className="subTitle">Income</div>
                <div style={{ color: 'green' }}>${income}</div>
            </div>
            <div style={expenseStyle}>
                <div className="subTitle">Expense</div>
                <div style={{ color: 'red' }}>${expense}</div>
            </div>
        </div>
    )
}

Summary.propTypes = {
    income: PropTypes.number.isRequired,
    expense: PropTypes.number.isRequired
}