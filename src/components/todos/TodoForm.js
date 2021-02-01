import React, {useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import styled from 'styled-components';
import { getTodo, createTodo, updateTodo } from '../../api/todo/TodoService';
import { getLoggedInUser } from '../../auth/AuthenticationService';
import FormButton from '../form-components/FormButton';

const StyledRow = styled(Row)`
  justify-content: center;
`

const TodoForm = props => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <StyledRow>
      <Form>
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
