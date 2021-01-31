import axios from 'axios';

const BASE_URL = 'http://www.localhost:5000'

export const registerUser = user => {
  return axios.post(`${BASE_URL}/register`, user)
}