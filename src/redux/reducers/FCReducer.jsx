const FCReducer = (state = [], action) => {
    if (action.type === 'SAVE_FAHRENHEIT_STATE'){
        console.log('FCReducer action: ', action.payload.action)
        return action.payload.action
    }
    else {
        return state;
    }
};

export default FCReducer;