import { combineReducers } from 'redux';
import  userReducer  from './userData/reducers';

const rootReducers = combineReducers({

  userReducer,
});

export default rootReducers;
