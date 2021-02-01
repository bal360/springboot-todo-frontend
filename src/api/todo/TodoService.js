import axios from 'axios';

const BASE_URL = 'http://www.localhost:5000/users'

export const getAllTodos = username => {
  return axios.get(`${BASE_URL}/${username}/todos`)
}

export const getTodo = (id, username) => {
  return axios.get(`${BASE_URL}/${username}/todos/${id}`)
}

export const createTodo = (username, todo) => {
  return axios.post(`${BASE_URL}/${username}/todos`, todo)
}

export const updateTodo = (id, username, todo) => {
  return axios.put(`${BASE_URL}/${username}/todos/${id}`, todo)
}

export const deleteTodo = (id, username) => {
  return axios.delete(`${BASE_URL}/${username}/todos/${id}`)
}