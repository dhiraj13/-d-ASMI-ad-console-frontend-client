import { combineReducers } from "redux";
import { registration, authentication } from './auth.reducer';
import message from './message'
export default combineReducers({
    authentication,
    registration,
    message
})