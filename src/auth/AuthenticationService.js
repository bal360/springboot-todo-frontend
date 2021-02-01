import axios from 'axios';

const sessionStorageUsername = 'authenticatedUser'
const LOC_URL = 'http://www.localhost:5000'

export const executeJwtAuthService = (username, password) => {
  return axios.post(`${LOC_URL}/authenticate`, {
    username, 
    password
  })
}

const createJwtToken = token => {
  sessionStorage.setItem('USER_TOKEN', `Bearer ${token}`)
  return `Bearer ${token}`
}

export const registerJwtLogin = (username, token) => {
  sessionStorage.setItem(sessionStorageUsername, username)
  createJwtToken(token)
}

export const isLoggedIn = () => {
  const user = sessionStorage.getItem(sessionStorageUsername)
  return user !== null ? true : false
}

export const logOut = () => {
  sessionStorage.clear()
}

export const getLoggedInUser = () => {
  const user = sessionStorage.getItem(sessionStorageUsername)
  return user !== null ? user : ''
}

// export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use((config) => {
    // console.log('interceptor - ', config)
    if (isLoggedIn()) {
      config.headers.Authorization = sessionStorage.getItem('USER_TOKEN')
    }
    return config
  })
// }

