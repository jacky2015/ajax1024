// const util = require('./util_action');

module.exports = {
    demo_action:function (params) {
        return (dispatch, getState) => {
            dispatch({
                type: 'DEMO',
                data: params
            });
        }
    }
}