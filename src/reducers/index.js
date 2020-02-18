import { combineReducers } from 'redux';
import currentUser from './manageUsers';
import budgets from './manageBudgets';
import categories from './manageCategories';

export default combineReducers({
  currentUser,
  budgets,
  categories
});
