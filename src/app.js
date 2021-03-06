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
import './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render( <p>Loading...</p> , document.getElementById('app'));

store.dispatch(expensesActions.startSetExpenses()).then(()=>{
    ReactDOM.render( jsx , document.getElementById('app'));
});

