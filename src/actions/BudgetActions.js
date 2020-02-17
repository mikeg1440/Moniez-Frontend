
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
  debugger
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
