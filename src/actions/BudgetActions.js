
import { getOptions, postOptions, deleteOptions } from '../helpers/requestHelpers'


export function getBudgets(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/budgets", getOptions())
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'GET_BUDGETS', payload: data})
      dispatch({type: 'SELECT_BUDGET', payload: localStorage.getItem('current_budget_id')})
    })
    .catch(console.log);
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

export function getEarningCategories(){
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/categories/earning_categories", getOptions())
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_EARNING_CATEGORIES', payload: data}))
    .catch(console.log);
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


export function addEntry(category, info){
  return (dispatch) => {
    if (info.amount === ""){
      dispatch({type: 'ADD_ERRORS', payload: 'Amount cannot be blank!'})
    }else {
      fetch(`http://localhost:3000/api/v1/${category}s`, postOptions({[`${category}`]: info}))
      .then(response => response.json())
      .then(data => dispatch({type: `ADD_${category.toUpperCase()}`, payload: data}))
      .catch(console.log)

    }
  }
}


export function deleteEntry(category, id){
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/${category}s/${id}`, deleteOptions())
    .then(response => response.json())
    .then(data => {
      if (data.id === parseInt(localStorage.getItem('current_budget_id'))) {
        localStorage.removeItem('current_budget_id')
      }
      dispatch({type: `DELETE_${category.toUpperCase()}`, payload: data})
    })
    .catch(console.log)
  }
}


export function removeErrors(){
  return (dispatch) => {
    dispatch({type: 'REMOVE_ERRORS'})
  }
}
