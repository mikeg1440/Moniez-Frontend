import { combineReducers } from 'redux';
import currentUser from './manageUsers';
import budgets from './manageBudgets';
import categories from './manageCategories';

// export default combineReducers({
//   currentUser,
//   budgets,
//   categories
// });

const appReducer = combineReducers({
  currentUser,
  budgets,
  categories
});


const rootReducer = (state, action) => {
  if (action.type === 'END_SESSION'){
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
