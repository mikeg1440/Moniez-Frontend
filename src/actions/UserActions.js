
export function registerUser(userInfo, props) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if (Object.keys(data).includes('id')){
        dispatch({type: 'LOGIN_USER', payload: data})
        props.history.push('/dashboard')
      }else {
        dispatch({type: 'USER_ERROR', payload: data})
      }
    })
    .catch(err => console.log(`Error Caught: ${err}`))
  }
}

export function loginUser(userInfo, props){

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if (Object.keys(data).includes('id')){
        dispatch({type: 'LOGIN_USER', payload: data})
        props.history.push('/dashboard')
      }else {
        dispatch({type: 'USER_ERROR', payload: data})
      }
    })
    .catch(console.log)
  }
}

export function isAuthed(){
  // this isn't going to work because we need todo headers = new Headers() then append token
  const token = localStorage.getItem('token')
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/is-authed', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'bearer': token,
      }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.log)
  }
}
