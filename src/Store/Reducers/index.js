import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  AuthReducer,
  LoadingReducer,
});

export default rootReducer;
