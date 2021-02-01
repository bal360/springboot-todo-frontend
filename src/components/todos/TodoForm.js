import React, {useEffect, useState } from 'react';
import { Button, Form, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import styled from 'styled-components';
import { getTodo, createTodo, updateTodo } from '../../api/todo/TodoService';
import { getLoggedInUser } from '../../auth/AuthenticationService';
import FormButton from '../form-components/FormButton';

const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 13rem;

  & form {
    width: 325px;
  }
  & .form-label { font-weight: 500; }
  & p {
    color: red; 
    font-size: 0.8rem;
  }
`

const TodoForm = props => {
  const { register, handleSubmit, errors } = useForm()
  const [todo, setTodo] = useState({
    id: null, 
    description: '',
    targetDate: ''
  })

  useEffect(() => {
    if (props.match.url !== '/todos/new') {
      getTodo(props.match.params.id, getLoggedInUser())
      .then(({ data }) => setTodo({
        id: data.id, 
        description: data.description, 
        targetDate: moment.utc(data.targetDate).format('YYYY-MM-DD'),
        completed: data.completed
      }))
    }
  }, [props.match.params.id, props.match.url])

  const onInputChange = event => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  const onSubmit = data => {
    const username = getLoggedInUser()
    if (todo.id === null) {
      createTodo(username, { ...todo })
      .then(() => props.history.push('/todos'))
    } else {
      updateTodo(props.match.params.id, username, todo)
      .then(() => props.history.push('/todos'))
    }
  }

  return (
    <StyledRow>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Todo</Form.Label>
          <Form.Control 
            type="text"
            name="description"
            value={todo.description}
            onChange={onInputChange}
            ref={register({ required: "Description required" })}
            />
          {errors.description && <p>{errors.description.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Date to be Completed</Form.Label>
          <Form.Control 
            type="date"
            name="targetDate"
            value={todo.targetDate}
            onChange={onInputChange}
            ref={register({ required: "Date required" })}
          />
          {errors.targetDate && <p>{errors.targetDate.message}</p>}
        </Form.Group>
        <FormButton text={"Save"} />
      </Form>
    </StyledRow>
  )
}

export default TodoForm;
