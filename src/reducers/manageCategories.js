export default function manageCategories(state = {
  earnings: [],
  bills: [],
  expenses: []
}, action){
  switch(action.type){
    case 'GET_EARNING_CATEGORIES':
      debugger
      return {...state, earnings: action.payload}
    default:
      return state
  }
}
