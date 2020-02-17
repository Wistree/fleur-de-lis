// root reducer represent all the state of our application
// all of the reducers will go into this root reducer

import { combineReducers } from 'redux'; 
import userReducer from './user/user.reducer';

// the key (ie: user) represent a slice of state
// the full state in redux is just one big JSON object

// creating root reducer object
export default combineReducers({
    user: userReducer
});