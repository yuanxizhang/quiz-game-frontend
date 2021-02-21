import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import userReducer from './userReducer';
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer
});
export default rootReducer;
