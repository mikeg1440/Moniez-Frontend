
const authToken = () => (localStorage.getItem('token'))

export function getBudgets(){
  // const token = localStorage.getItem('token')

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/budgets', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        'bearer': authToken,
      }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.log)
  }

  }
}
