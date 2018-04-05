import React from 'react';
import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        props.expense 
        ?
        <div>
        <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
            props.dispatch(actions.editExpense(props.match.params.id,expense));
            props.history.push('/');
         }} />
         <button onClick={ ()=> { 
            props.dispatch(actions.removeExpense({id: props.match.params.id}));
             props.history.push('/');
            }}>REMOVE</button>
         </div>
         : 
         <p>Not found </p>
    )
};
const mapStateToProps = (state,ownProps) => {
    return {
        expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id )
    };
};


export default connect(mapStateToProps)(EditExpensePage);