
const authToken = () => (localStorage.getItem('token'))

const requestHeaders = () => {
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("bearer", authToken())
  return headers
}

const getOptions = () => ({
  method: 'GET',
  headers: requestHeaders(),
  redirect: 'follow'
})

const postOptions = (infoObject) => ({
  method: 'POST',
  headers: requestHeaders(),
  body: JSON.stringify(infoObject),
})

export function getBudgets(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/budgets", getOptions())
    .then(response => response.json())
    .then(data => dispatch({type: 'SET_BUDGETS', payload: data}))
    .catch(console.log);
  }

}

export function addBudget(budgetInfo){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/budgets", postOptions({budget: budgetInfo}))
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_BUDGET', payload: data}))
    .catch(console.log)
  }
}

export function selectBudget(budgetId){
  return ({type: 'SELECT_BUDGET', payload: budgetId})
}

export function getEarnings(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/earnings", getOptions())
    .then(response => response.json())
    .then(data => dispatch({type: 'SET_EARNINGS', payload: data}))
    .catch(console.log);
  }
}
// export function getReguest(category){
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/${category}`, getOptions())
//     .then(response => response.json())
//     .then(data => dispatch({type: `SET_${category.toUpperCase}`, payload: data}))
//     .catch(console.log);
//   }
// }

export function getEarningCategories(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/categories/earning_categories", getOptions())
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_EARNING_CATEGORIES', payload: data}))
    .catch(console.log);
  }
}


export function addEarning(earningInfo){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/earnings", postOptions({earning: earningInfo}))
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_EARNING', payload: data}))
    .catch(console.log)
  }
}

export function getCategories(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/categories", getOptions())
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_CATEGORIES', payload: data}))
    .catch(console.log);
  }
}

export function getBudgetDetails(budgetId){
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/budgets/${budgetId}`, getOptions())
    .then(response => response.json())
    .then(data => dispatch({type: 'SET_BUDGET_DETAILS', payload: data}))
    .catch(console.log);
  }

}

export function addExpense(expenseInfo){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/expenses", postOptions({expense: expenseInfo}))
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_EXPENSE', payload: data}))
    .catch(console.log)
  }
}


export function addBill(billInfo){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/bills", postOptions({bill: billInfo}))
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_BILL', payload: data}))
    .catch(console.log)
  }
}
