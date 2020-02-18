export default function manageCategories(state = {
  earnings: [],
  bills: [],
  expenses: []
}, action){
  switch(action.type){
    case 'GET_EARNING_CATEGORIES':
      return {...state, earnings: action.payload}
    case 'GET_CATEGORIES':
      return action.payload
    default:
      return state
  }
}
