import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { BiArrowFromBottom } from 'react-icons/bi';
import moment from 'moment';
import styled from 'styled-components';

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
  // const [checked, setCheckBox] = useState(completed)

  return (
    <tr>
      <td>{description}</td>
      <td>{moment.utc(targetDate).format('YYYY-MM-DD')}</td>
      <td>
        <Form.Group>
          <Form.Check 
            type="checkbox"
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
        DeleteModal Component
      </td>
    </tr>
  )
}

export default Todo;
