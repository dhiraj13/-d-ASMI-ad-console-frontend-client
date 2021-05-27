import axios from 'axios'
import { setToLocalStorage } from '../helpers/localstorage'
import httpService from '../services/httpService'
import logger from '../services/logService'
const API_URL = process.env.REACT_APP_BASE_API_URL + '/auth/'

const register = async (user) => {
  try {
    let { data } = await httpService.post(API_URL + 'register', user)
    return data
  } catch (e) {
    logger.log('Error! Please Try Again. Could not Submit Data', e)
  }
}

// const login = async (username, password) => {
// try {
//   let response = await httpService.post(API_URL + 'login', {
//     username,
//     password,
//   })
//   console.log(response.data.message, 'message')
//   const user = response.data.data.data
//   const { access_token: accessToken, refresh_token: refreshToken } =
//     response.data.data.payload
//   setToLocalStorage('user', JSON.stringify(user))
//   setToLocalStorage('accessToken', accessToken)
//   setToLocalStorage('refreshToken', refreshToken)
// } catch (e) {
//   logger.log('Unable to Login!', e)
// }
// }

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

const login = async (username, password) => {
  let res = await axios.post(`${API_URL}login`, { username, password })

  if (!res.data.success) {
    if (res.status === 401) {
      logout()
    }

    const error = res.data && res.data.message
    return Promise.reject(error)
  }
  console.log(res.data, 'data')
  const user = res.data.data.data
  const { access_token: accessToken, refresh_token: refreshToken } =
    res.data.data.payload
  setToLocalStorage('user', JSON.stringify(user))
  setToLocalStorage('accessToken', accessToken)
  setToLocalStorage('refreshToken', refreshToken)

  return user
}

export const authService = {
  register,
  login,
}
