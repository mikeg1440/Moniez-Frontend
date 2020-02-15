
export function registerUser(userInfo) {
  return (dispatch) => {fetch('http://localhost:3000/api/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user: userInfo})
  }).then(resp => {
    console.log(resp.headers)
    return resp.json()
  })
  .then(console.log)
  .catch(err => console.log(`Error Caught: ${err}`))

  }
}
