import { combineReducers } from 'redux';
import weatherDataReducer from './weatherDataReducer';
import FCReducer from './FCReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  weatherDataReducer,
  FCReducer,
  errorReducer,
});

export default rootReducer;
