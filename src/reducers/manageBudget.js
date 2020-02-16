
export default function manageBudget(state = { budgets: [] }, action) {
  switch(action.type){
    case 'SET_BUDGET':
      debugger
      return {...action.payload}
    default:
      return state
  }
}
