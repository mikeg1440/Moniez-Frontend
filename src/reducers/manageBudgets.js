
export default function manageBudgets(state = {
  all: [],
  selected: {},
  earnings: [],
  bills: [],
  expenses: []
}, action) {
  switch(action.type){
    case 'SET_BUDGETS':
      return {...state, all: action.payload}
    case 'ADD_BUDGET':
      return {...state, all: [...state.all, action.payload]}
    case 'SELECT_BUDGET':
      let selected = state.all.filter(budget => budget.id === parseInt(action.payload))[0]
      localStorage.setItem('current_budget_id', selected.id)
      return {...state, selected: selected}
    case 'SET_BUDGET_DETAILS':
      return {...state, selected: action.payload}
    case 'SET_EARNINGS':
      return {...state, earnings: action.payload}
    case 'ADD_EARNING':
      return {...state, earnings:[ ...state.earnings, action.payload]}
    case 'ADD_EXPENSE':
      return {...state, selected: {expenses: [ ...state.selected.expenses, action.payload]}}
    case 'ADD_BILL':
      return {...state, selected: {bills: [ ...state.selected.bills, action.payload]}}
    default:
      return state
  }
}
