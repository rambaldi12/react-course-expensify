import React from 'react';
import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
    <div>
        <h1>Add expense</h1>
        <ExpenseForm onSubmit={(expense)=>{
            props.startAddExpense(expense);
            props.history.push('/');
         }} />
    </div>
);


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => { dispatch(actions.startAddExpense(expense)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddExpensePage);
