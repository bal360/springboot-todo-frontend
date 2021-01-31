import React from 'react';
import { Alert } from 'react-bootstrap';

const FormFailMessage = ({ failed, form, message }) => {
  return (
    <div>
      { failed ? 
        <Alert variant="warning">
          <Alert.Heading>{form}</Alert.Heading>
          <p>{message}</p>
        </Alert>
        :
        null
      }
    </div>
  )
}

export default FormFailMessage;