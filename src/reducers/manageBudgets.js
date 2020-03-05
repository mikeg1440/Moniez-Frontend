
export default function manageBudgets(state = {
  all: [],
  selected: {},
  errors: [],
}, action) {
  switch(action.type){
    case 'GET_BUDGETS':
      return {...state, all: action.payload}
    case 'ADD_BUDGET':
      return {...state, all: [...state.all, action.payload]}
    case 'DELETE_BUDGET':
      if (parseInt(localStorage.getItem('current_budget_id')) === action.payload.id){
        return {...state, selected: {}, all: [...state.all.filter(budget => budget.id !== action.payload.id)]}
      }else {
        return {...state, all: [...state.all.filter(budget => budget.id !== action.payload.id)]}
      }
    case 'SELECT_BUDGET':
      let selected = state.all.filter(budget => budget.id === parseInt(action.payload))[0]
      localStorage.setItem('current_budget_id', selected.id)
      return {...state, selected: selected}
    case 'SET_BUDGET_DETAILS':
      return {...state, selected: action.payload}
    case 'SET_EARNINGS':
      return {...state, earnings: action.payload}
    case 'ADD_EARNING':
      return {...state, selected: {...state.selected, earnings:[ ...state.selected.earnings, action.payload]}}
    case 'DELETE_EARNING':
      return {...state, selected: {...state.selected, earnings: [...state.selected.earnings.filter(earning => earning.id !== action.payload.id)]}}
    case 'ADD_EXPENSE':
      return {...state, selected: {...state.selected, expenses: [ ...state.selected.expenses, action.payload]}}
    case 'DELETE_EXPENSE':
      return {...state, selected: {...state.selected, expenses: [...state.selected.expenses.filter(expense => expense.id !== action.payload.id)]}}
    case 'ADD_BILL':
      return {...state, selected: {...state.selected, bills: [ ...state.selected.bills, action.payload]}}
    case 'DELETE_BILL':
      return {...state, selected: {...state.selected, bills: [...state.selected.bills.filter(bill => bill.id !== action.payload.id)]}}
    case 'ADD_ERRORS':
      return {...state, errors: [action.payload]}
    case 'REMOVE_ERRORS':
      const {errors, ...stateWithoutErrors} = state
      return {stateWithoutErrors}
    default:
      return state
  }
}
