import { combineReducers } from 'redux';
import currentUser from './manageUsers';
import budgets from './manageBudgets';

export default combineReducers({
  currentUser,
  budgets
});
