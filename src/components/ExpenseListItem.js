import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({expense, dispatch}) =>(
    <div>
        <h3>
        <Link to={'/edit/' + expense.id}>
        {expense.description}
        </Link>
       </h3>
        <p>{numeral(expense.amount/100).format('$0,0.00')} - {moment(expense.createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default (ExpenseListItem);