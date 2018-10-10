import { combineReducers } from 'redux';
import UserReducer from './userReducer';

const rootReducer = combineReducers({  
  // short hand property names
  users:UserReducer
})

export default rootReducer; 