import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk  from 'redux-thunk'

import App from './components/App';
import combineReducers from './reducers';
 
const sotre = createStore(combineReducers,applyMiddleware(thunk ));
ReactDOM.render(
    <Provider store={sotre}>
        <App />
    </Provider>,
    document.getElementById('root')
 );