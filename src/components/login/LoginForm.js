import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import LogoHeader from '../LogoHeader';
import FormFailMessage from '../form-components/FormFailMessage';
import FormButton from '../form-components/FormButton';
import FormFooter from '../form-components/FormFooter';

const LoginForm = props => {
  const { register, handleSubmit, errors } = useForm()
  const [ formErrorMessage, setFormErrorMessage ] = useState({
    failed: false, 
    form: "Login failed",
    message: "Please try entering your credentials again."
  })

  const { failed, form, message } = formErrorMessage
  return (
    <>
      <LogoHeader />
      <FormFailMessage 
        failed={failed}
        form={form}
        message={message}
      />
    </>
  )
}

export default LoginForm;