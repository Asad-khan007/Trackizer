import {combineReducers} from 'redux';
import MainReducer from './MainReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  MainReducer,
  LoadingReducer,
});

export default rootReducer;
