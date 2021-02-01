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
  
  // & form {
  //   width: 325px;
  //   padding: 25px;
  //   background-color: #f8f9fa; 
  //   border-radius: 10px
  // }
  & .form-label { font-weight: 500; }
  & p {
    color: red; 
    font-size: 0.8rem;
  }
`

const TodoForm = props => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <StyledRow>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Todo</Form.Label>
          <Form.Control 
            type="text"
            name="description"
            ref={register({ required: "Description required" })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Date to be Completed</Form.Label>
          <Form.Control 
            type="text"
            name="targetDate"
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
