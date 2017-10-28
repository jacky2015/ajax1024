
import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {routerMiddleware, routerReducer,syncHistoryWithStore} from 'react-router-redux';
import {Router, Link, IndexRoute, Route, hashHistory, browserHistory} from 'react-router';
import reducer from './redux/reducers/'
import 'babel-polyfill'; //加入JS语法兼容1

import {Demo} from './Demo';
import {Demo2} from './Demo2';
import {Demo3} from './Demo3';

let finalCreateStore = compose(applyMiddleware(routerMiddleware(browserHistory),thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
let store = finalCreateStore(reducer);

let unsubscribe = store.subscribe(() =>(()=>{}));
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/index" component={Demo} />
            <Route path="/index2" component={Demo2} />
            <Route path="/index3" component={Demo3} />
        </Router>
    </Provider>
), document.getElementById('root'));