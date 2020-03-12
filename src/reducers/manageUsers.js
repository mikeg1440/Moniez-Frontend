
export default function manageUsers(state = {
  isLoggedIn: false
}, action){
  switch(action.type){
    case 'LOGIN_USER':
      const {id, username, email, authentication_token} = action.payload
      localStorage.setItem('token', authentication_token)
      return {...state, isLoggedIn: true, id, username, email}
    case 'USER_ERROR':
      let errors = []
      if (!Array.isArray(action.payload.errors)){
        errors.push(action.payload.errors)
      }else {
        errors = action.payload.errors;
      }
      return {...state, errors: errors}
    case 'CLEAR_ERRORS':
      const {oldErrors, ...stateWithoutErrors} = state
      return {stateWithoutErrors}
    default:
      return state
  }
}
