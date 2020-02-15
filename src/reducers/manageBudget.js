
export default function manageBudget(state = {
  earnings: [],
  bills: [],
  expenses: []
}, action) {
  switch(action.type){
    case 'ADD_EARNING':
      return state
    // case 'ADD_BILL':
    //   // add bill
    // case 'ADD_EXPENSE':
    //   // add expense
    default:
      return state
  }
}
