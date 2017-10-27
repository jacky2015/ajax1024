















module.exports = {
    app: function (state = {}, action) {
        switch (action.type) {
            case "DEMO":
                return {...state, data: action.data};
            default:
                return state
        }
    }
};

