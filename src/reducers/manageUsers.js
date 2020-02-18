
export default function manageUsers(state = {
  isLoggedIn: false
}, action){
  switch(action.type){
    case 'LOGIN_USER':
      const {id, username, email, authentication_token} = action.payload
      localStorage.setItem('token', authentication_token)
      return {...state, isLoggedIn: true, id, username, email}
    case 'LOGOUT_USER':
      localStorage.removeItem('token')
      return {isLoggedIn: false}
    case 'USER_ERROR':
      return {...state, errors: [action.payload.errors]}
    case 'CLEAR_ERRORS':
      const {oldErrors, ...stateWithoutErrors} = state
      return {stateWithoutErrors}
    default:
      return state
  }
}
