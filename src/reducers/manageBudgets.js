
export default function manageBudgets(state = [], action) {
  switch(action.type){
    case 'SET_BUDGETS':
      debugger
      return action.payload
    case 'ADD_BUDGET':
      debugger
      return state.concat(action.payload)
    default:
      return state
  }
}
