import { setToLocalStorage } from '../helpers/localstorage'
import httpService from '../services/httpService'
import logger from '../services/logService'
const API_URL = process.env.REACT_APP_BASE_API_URL + '/auth/'

const register = async (user) => {
  try {
    let response = await httpService.post(API_URL + 'register', user)
    console.log(response, 'response')
    if (!response.data.success) {
      const error = response.data && response.data.message
      return Promise.reject(error)
    }
    return response
  } catch (e) {
    logger.log('Error! Please Try Again. Could not Submit Data', e)
    return Promise.reject(e)
  }
}

const login = async (username, password) => {
  try {
    let response = await httpService.post(API_URL + 'login', {
      username,
      password,
    })
    if (!response.data.success) {
      if (response.status === 401) {
        logout()
      }

      const error = response.data && response.data.message
      return Promise.reject(error)
    }
    console.log(response.data, 'data')
    const user = response.data.data.data
    const { access_token: accessToken, refresh_token: refreshToken } =
      response.data.data.payload
    setToLocalStorage('user', JSON.stringify(user))
    setToLocalStorage('accessToken', accessToken)
    setToLocalStorage('refreshToken', refreshToken)

    return user
  } catch (e) {
    logger.log('Unable to Login!', e)
    return Promise.reject(e)
  }
}

const googleAuth = async (payload) => {
  try {
    const GOOGLE_AUTH_URL =
      process.env.REACT_APP_BASE_API_URL +
      `/api/social-account/auth/google/${payload}`
    let response = await httpService.post(GOOGLE_AUTH_URL)
    console.log(response, 'googleloginresponse')
  } catch (e) {
    logger.log('Unable to Login!', e)
    return Promise.reject(e)
  }
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

export const authService = {
  register,
  login,
  googleAuth,
}
