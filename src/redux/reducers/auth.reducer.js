import { getFromLocalStorage } from '../../helpers/localstorage'
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/types'

let user = JSON.parse(getFromLocalStorage('user'))
const initialState = user ? { loggedIn: true, user } : {}

export function authentication(state = initialState, { error, type, user }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: user,
      }
    case LOGIN_SUCCESS:
      return {
        loggingIn: true,
        user: user,
      }
    case LOGIN_FAILURE:
      return {
        loggingIn: false,
      }

    case LOGOUT:
      return {}
    default:
      return state
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export function registration(state = {}, action) {
  const { type } = action

  switch (type) {
    case REGISTER_REQUEST:
      return { registering: true }

    case REGISTER_SUCCESS:
      return {}
    case REGISTER_FAILURE:
      return {}
    default:
      return state
  }
}
