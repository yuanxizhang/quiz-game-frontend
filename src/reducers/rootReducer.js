import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  user: userReducer
});
export default rootReducer;
