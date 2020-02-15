import { combineReducers } from 'redux';
import currentUser from './manageUsers';
import budget from './manageBudget';

export default combineReducers({
  currentUser,
  budget
});
