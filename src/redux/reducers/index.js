import {combineReducers} from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const demo = require('./demo_reducer').app;

export default combineReducers({
    demo,
    routing: routerReducer
})