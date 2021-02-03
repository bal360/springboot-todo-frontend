import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { GrAddCircle } from 'react-icons/gr';
import { getLoggedInUser } from '../../auth/AuthenticationService';
import { getAllTodos, deleteTodo } from '../../api/todo/TodoService';
import styled from 'styled-components';
import Todo from './Todo';

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`

const StyledButton = styled(Button)`
  background-color: #3D3DB2 !important;
  border-color: #3D3DB2 !important;
  margin-top: 1rem;
`

const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos(getLoggedInUser())
    .then(({ data }) => setTodos(data))
    .catch(error => console.log(error.message))
  }, [])

  const onDeleteButton = id => {
    const user = getLoggedInUser()
    getAllTodos(user)
    .then(({ data }) => setTodos(data))
    .catch(error => console.log(error.message))
  }

  const listOfTodos = () => {
    return todos.map(({ id, description, targetDate, completed }) => {
      return (
        <Todo 
          key={id}
          id={id}
          description={description}
          targetDate={targetDate}
          completed={completed}
          onDeleteButton={onDeleteButton}
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
            <th>Done</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listOfTodos()}
        </tbody>
      </Table>
      <Link to={"/todos/new"}>
          <StyledButton>New Todo</StyledButton>
      </Link>
    </>
  )
}

export default TodoList;