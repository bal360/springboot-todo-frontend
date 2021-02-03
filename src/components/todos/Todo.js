import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { BiArrowFromBottom } from 'react-icons/bi';
import moment from 'moment';
import styled from 'styled-components';
import { updateTodo } from '../../api/todo/TodoService';
import DeleteModal from './DeleteModal';

const StyledButton = styled(Button)`
  color: #3D3DB2;
  background-color: #f8f9fa;
  border-color: #3D3DB2;
  :hover {
    background-color: #3D3DB2;
    border-color: #fff;
  }
`

const Todo = ({ id, description, targetDate, completed, onDeleteButton }) => {
  const [checked, setCheckBox] = useState(completed)

  const checkIt = event => {
    const { checked } = event.target
    const username = sessionStorage.getItem('authenticatedUser')
    setCheckBox(checked)
    updateTodo(id, username, {
      description, 
      targetDate, 
      completed: checked
    })
  }

  return (
    <tr>
      <td>{description}</td>
      <td>{moment.utc(targetDate).format('YYYY-MM-DD')}</td>
      <td>
        <Form.Group>
          <Form.Check 
            type="checkbox"
            onChange={e => checkIt(e)}
            checked={checked}
          />
        </Form.Group>
      </td>
      <td>
        <Link to={`/todos/${id}`}>
          <StyledButton>
            <BiArrowFromBottom size={20} />
          </StyledButton>
        </Link>
      </td>
      <td>
        <DeleteModal />
      </td>
    </tr>
  )
}

export default Todo;
