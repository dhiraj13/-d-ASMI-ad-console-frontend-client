import { getFromLocalStorage } from './localstorage'

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(getFromLocalStorage('user'))

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}
