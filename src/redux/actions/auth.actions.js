import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/types'
import { authService } from '../../services/auth.service'
import { history } from '../../helpers/history'

const login = (username, password, from) => {
  return (dispatch) => {
    dispatch(request({ username }))
    authService.login(username, password).then(
      (user) => {
        dispatch(success(user))
        history.push(from)
      },
      (error) => {
        dispatch(failure(error.toString()))
        console.log('Login Unsuccessful!')
      }
    )
  }

  function request(user) {
    return { type: LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error }
  }
}

const register = (user) => {
  return (dispatch) => {
    dispatch(request(user))

    authService.register(user).then(
      (user) => {
        dispatch(success(user))
        history.push('/login')
        console.log('Registration Successful!!')
      },
      (error) => {
        dispatch(failure(error.toString()))
        console.log('Registration Failed')
      }
    )
  }

  function request(user) {
    return { type: REGISTER_REQUEST, user }
  }
  function success(user) {
    return { type: REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: REGISTER_FAILURE, error }
  }
}

export const authActions = {
  register,
  login,
}
