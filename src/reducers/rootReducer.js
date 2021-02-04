import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import userReducer from './userReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  errors: errorsReducer,
  jobs: jobsReducer
});
export default rootReducer;
