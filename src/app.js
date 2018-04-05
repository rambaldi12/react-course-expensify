import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import configureStore from './store/configureStore';
import * as expensesActions from './actions/expenses';
import * as filtersActions from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux';


const store = configureStore();

store.dispatch(expensesActions.addExpense({
    description:'Water bill',
    note:'Dis iz note',
    amount: 5500,
    createdAt: 1000
}));

store.dispatch(expensesActions.addExpense({
    description:'Rent',
    note:'Dis iz note',
    amount: 109500,
}));

store.dispatch(expensesActions.addExpense({
    description:'Gas bill',
    note:'Dis iz note',
    amount: 4500,
}));


const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render( jsx , document.getElementById('app'));