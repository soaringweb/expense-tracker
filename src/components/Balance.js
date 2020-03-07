import React from 'react';
import PropTypes from 'prop-types';

export default function Balance({amount}) {
    
    const re = /^-/;
    const isExpense = re.test(amount);
    
    if ( isExpense ) {
        amount = '-$' + Math.abs(parseFloat(amount).toFixed(2));
    } else {
        amount = '$' + parseFloat(amount).toFixed(2);
    }

 return (
     <div className='container'>
         <div className="subTitle">Your Balance</div>
         <div style={{ fontSize: '1.4em' }} className={ isExpense ? 'expense' : 'income' }>{amount}</div>
     </div>
 )   
}

Balance.propTypes = {
    amount: PropTypes.number.isRequired
}
    