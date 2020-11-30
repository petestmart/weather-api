const errorReducer = (state = [], action) => {
    // if (action.type === 'RESET_ERROR'){
    //     return state
    // }
    if (action.type === 'LOCATION_ERROR') {
        console.log('There was an error finding location', action.action);
        return action.action
    }

    return state;
};



export default errorReducer;