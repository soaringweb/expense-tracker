import React, { Component } from 'react';

export default class AddTransaction extends Component {
    state = {
        text: '',
        amount: '',
        isExpense: true
    }

    handleTrans = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleAdd = evt => {
        evt.preventDefault();
        this.props.handleAdd({ ...this.state });
        this.setState({ text: '', amount: '' })
    }

    render() {
        return (
            <div className="container">
                <div className="subTitle" style={{ borderBottom: '1px solid #AAA', textTransform: 'none' }}>Add new transaction</div>
                <form id="addTransactionForm" name="addTransactionForm" onSubmit={this.handleAdd}>
                    <label htmlFor="text" className="expand">Text</label>
                    <input id="text" type="text" name="text" placeholder="Enter text..." value={this.state.text} onChange={this.handleTrans}/>
                    
                    <div id="expenseTypeContainer">
                        <input type="radio" name="expenseType" value="expense" id="radioExpense" onChange={ () => this.setState({ isExpense: true} )} checked={this.state.isExpense} /><label htmlFor="radioExpense">Expense</label>
                        <input type="radio" name="expenseType" value="income" id="radioIncome" onChange={() => this.setState({ isExpense: false })} checked={!this.state.isExpense} /><label htmlFor="radioIncome">Income</label>
                    </div>

                    <label htmlFor="amount" className="expand">Amount</label>
                    <input id="amount" type="text" name="amount" placeholder="Enter amount..." value={this.state.amount} onChange={this.handleTrans} />
                    <button type="submit">Add Transaction</button>
                </form>
            </div>
        )
    }
}