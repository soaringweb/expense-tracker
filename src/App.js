import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './style.css';

import Balance from './components/Balance';
import Summary from './components/Summary';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

export default class App extends Component {
    
    state={
        transactions: [],
        transaction: {},
        balance: 0,
        income: 0,
        expense: 0
    }

    handleAdd = ({ text, amount, isExpense}) => {
        const { transactions }  = this.state;
        
        transactions.unshift({ id: uuid(), text, amount: Number(amount), isExpense });
        this.setState({ transactions })

        this.updateBalance();
    }

    updateBalance = () => {
        const income = this.state.transactions.reduce( (acc, curr) => {
            if(!curr.isExpense) {
                return acc+curr.amount;
            }

            return acc;
        }, 0);

        const expense = this.state.transactions.reduce((acc, curr) => {
            if (curr.isExpense) {
                return acc + curr.amount;
            }

            return acc;
        }, 0);

        this.setState({ income })
        this.setState({ expense })

        this.setState({balance: income - expense })
    }

    render() {
        const { income, expense, balance, transactions } = this.state;
        return(
            <React.Fragment>
                <header>Expense Tracker</header>
                <Balance amount={ balance } />
                <Summary income={ income } expense={ expense }/>
                <AddTransaction handleAdd={this.handleAdd} />
                <History transactions={ transactions } />
                
            </React.Fragment>
        )
    }
}
