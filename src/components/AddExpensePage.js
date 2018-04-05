import React from 'react';
import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
    <div>
        <h1>Add expense</h1>
        <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(actions.addExpense(expense));
            props.history.push('/');
         }} />
    </div>
);


const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(AddExpensePage);
