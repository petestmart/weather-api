import { combineReducers } from 'redux';
import weatherDataReducer from './weatherDataReducer';
import FCReducer from './FCReducer';

const rootReducer = combineReducers({
  weatherDataReducer, 
  FCReducer,
});

export default rootReducer;
