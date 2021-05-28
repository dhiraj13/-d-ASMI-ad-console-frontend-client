import * as types from '../actions/types'
import { authService } from '../../services/auth.service'
import { history } from '../../helpers/history'

const login = (username, password, from) => {
  return (dispatch) => {
    dispatch(request({ username }))
    authService.login(username, password).then(
      (user) => {
        dispatch(success(user))
        if (user.isEmailVerified) {
          history.push('/dashboard')
        } else {
          history.push('/confirmation')
        }
        // history.push(from)
      },
      (error) => {
        dispatch(failure(error.toString()))
        console.log('Login Unsuccessful!')
      }
    )
  }

  function request(user) {
    return { type: types.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: types.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: types.LOGIN_FAILURE, error }
  }
}

const register = (user) => {
  return (dispatch) => {
    dispatch(request(user))

    authService.register(user).then(
      (user) => {
        dispatch(success(user))
        history.push('/confirmation')
        console.log('Registration Successful!!')
      },
      (error) => {
        dispatch(failure(error.toString()))
        console.log('Registration Failed')
      }
    )
  }

  function request(user) {
    return { type: types.REGISTER_REQUEST, user }
  }
  function success(user) {
    return { type: types.REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: types.REGISTER_FAILURE, error }
  }
}

const googleAuth = (payload) => {
  return (dispatch) => {
    dispatch(request())

    authService.googleAuth(payload).then(
      (user) => {
        dispatch(success(user))
        history.push('/')
        console.log('Registration Successful!!')
      },
      (error) => {
        dispatch(failure(error.toString()))
        console.log('Registration Failed')
      }
    )
  }

  function request() {
    return { type: types.GOOGLE_AUTH_REQUEST }
  }
  function success(user) {
    return { type: types.GOOGLE_AUTH_SUCCESS, user }
  }
  function failure(error) {
    return { type: types.GOOGLE_AUTH_FAILURE, error }
  }
}

export const authActions = {
  register,
  login,
  googleAuth,
}
