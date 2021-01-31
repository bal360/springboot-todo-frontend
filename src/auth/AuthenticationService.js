import axios from 'axios';

const sessionStorageUsername = 'authenticatedUser'
const LOC_URL = 'http://www.localhost:5000.com'

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
  setupAxiosInterceptors(createJwtToken(token))
}

export const isLoggedIn = () => {
  let user = sessionStorage.getItem(sessionStorageUsername)
  return user !== null ? true : false
}

export const logOut = () => {
  sessionStorage.clear()
}

export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use((config) => {
    if (isLoggedIn()) {
      config.headers.authorization = sessionStorage.getItem('USER_TOKEN')
    }
    return config
  })
}

