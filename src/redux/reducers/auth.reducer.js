import { getFromLocalStorage } from '../../helpers/localstorage'
import * as types from '../actions/types'

let user = JSON.parse(getFromLocalStorage('user'))
const initialState = user ? { loggedIn: true, user } : {}

export function authentication(state = initialState, { error, type, user }) {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: user,
      }
    case types.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        user: user,
      }
    case types.LOGIN_FAILURE:
      return {
        loggingIn: false,
        error: error,
      }

    case types.LOGOUT:
      return {}
    default:
      return state
  }
}

const initialStateForRegistration = {
  registering: false,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export function registration(
  state = initialStateForRegistration,
  { type, error, user }
) {
  switch (type) {
    case types.REGISTER_REQUEST:
      return { registering: true }

    case types.REGISTER_SUCCESS:
      return { user: user, registering: false }
    case types.REGISTER_FAILURE:
      return { registering: false, error: error }
    default:
      return state
  }
}

export function googleAuth(state = initialState, { error, type, user }) {
  switch (type) {
    case types.GOOGLE_AUTH_REQUEST:
      return {
        loggingIn: true,
      }
    case types.GOOGLE_AUTH_SUCCESS:
      return {
        loggingIn: false,
        user: user,
      }
    case types.GOOGLE_AUTH_FAILURE:
      return {
        loggingIn: false,
        error: error,
      }
    default:
      return state
  }
}
