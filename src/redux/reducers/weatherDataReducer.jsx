// Returns the data from the Weather API
const weatherDataReducer = (state = [], action) => {
    console.log('newNamesReducer', action.payload);
    if (action.type === 'SET_WEATHER_DATA') {
        return action.payload
    }

    return state;
};



export default weatherDataReducer;