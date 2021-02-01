import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { getLoggedInUser } from '../../auth/AuthenticationService';
import { getAllTodos } from '../../api/todo/TodoService';
import styled from 'styled-components';
import Todo from './Todo';

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`
const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos(getLoggedInUser())
    .then(({ data }) => setTodos(data))
    .catch(error => console.log(error.message))
  }, [])

  const listTodos = () => {
    return todos.map(({ id, description, targetDate, completed }) => {
      return (
        <Todo 
          key={id}
          id={id}
          description={description}
          targetDate={targetDate}
          completed={completed}
        />
      )
    })
  }

  return (
    <>
      <Heading>Your Todos</Heading>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>Completed?</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listTodos()}
        </tbody>
      </Table>
    </>
  )
}

export default TodoList;