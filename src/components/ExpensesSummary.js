import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import calcSum from '../selectors/expenses-total';
import numeral from 'numeral';
const ExpensesSummary = (props) => (
    <div>
        You are viewing {props.count} expenses totaling {numeral(props.sum/100).format('$0,0.00')}.
    </div>
);

const mapStateToProps = (state) => {
    var expenses = selectExpenses(state.expenses,state.filters)
    return {
        count: expenses.length,
        sum: calcSum(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);