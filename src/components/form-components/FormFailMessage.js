import React from 'react';
import { Alert } from 'react-bootstrap';

const FormFailMessage = ({ failed, form, message }) => {
  return (
    <>
      { failed ? 
        <Alert variant="warning">
          <Alert.Heading>{form}</Alert.Heading>
          <p>{message}</p>
        </Alert>
        :
        null
      }
    </>
  )
}

export default FormFailMessage;