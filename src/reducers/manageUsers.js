
export default function manageUsers(state = {
  isLoggedIn: false
}, action){
  switch(action.type){
    case 'REGISTER_USER':
      console.log(action.payload)
      break
    // case 'LOGIN_USER':
    //   // send user login request here
    // case 'LOGOUT_USER':
    //   // send user logout request
    default:
      return state
  }
}
