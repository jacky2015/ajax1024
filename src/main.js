
import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {routerMiddleware, routerReducer,syncHistoryWithStore} from 'react-router-redux';
import {Router, Link, IndexRoute, Route, hashHistory, browserHistory} from 'react-router';
import reducer from './redux/reducers/'
import 'babel-polyfill'; //加入JS语法兼容

import {Home} from './components/home/Main';
import {Product} from './components/Product/Main';
import {VIP} from './components/Vip/Main';
import {Discover} from './components/Discover/Main';
import {User} from './components/User/Main';


let finalCreateStore = compose(applyMiddleware(routerMiddleware(browserHistory),thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
let store = finalCreateStore(reducer);

let unsubscribe = store.subscribe(() =>(()=>{}));
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home} />
            <Route path="/index" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/vip" component={VIP} />
            <Route path="/discover" component={Discover} />
            <Route path="/user" component={User} />
        </Router>
    </Provider>
), document.getElementById('root'));