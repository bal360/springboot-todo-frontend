import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { BiArrowFromBottom } from 'react-icons/bi';
import moment from 'moment';

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
        <Link>
          <Button>
            <BiArrowFromBottom  size={20} />
          </Button>
        </Link>
      </td>
      <td>
        DeleteModal Component
      </td>
    </tr>
  )
}

export default Todo;
