
export default function manageBudgets(state = {
  all: [],
  selected: {}
}, action) {
  switch(action.type){
    case 'SET_BUDGETS':
      return {...state, all: action.payload}
    case 'ADD_BUDGET':
      debugger
      return {...state, all: state.concat(action.payload)}
    case 'SELECT_BUDGET':
      let selected = state.all.filter(budget => budget.id === parseInt(action.payload))[0]
      return {...state, selected: selected}
    default:
      return state
  }
}
