import axios from 'axios';

const BASE_URL = 'http://www.localhost:5000/users'

export const getAllTodos = (username) => {
  return axios.get(`${BASE_URL}/${username}/todos`)
}