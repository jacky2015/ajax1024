

// const util = require('./util_action');
import { push } from 'react-router-redux'

module.exports = {
    goUrl:function(params) {
        return (dispatch, getState) => {
            dispatch(push(params))
        }
    }
};


