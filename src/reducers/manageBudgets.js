
export default function manageBudgets(state = [], action) {
  switch(action.type){
    case 'SET_BUDGET':
      debugger
      return {...action.payload}
    default:
      return state
  }
}
