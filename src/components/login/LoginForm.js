import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import LogoHeader from '../LogoHeader';
import FormFailMessage from '../form-components/FormFailMessage';
import FormButton from '../form-components/FormButton';
import FormFooter from '../form-components/FormFooter';
import { executeJwtAuthService, registerJwtLogin } from '../../auth/AuthenticationService';

const StyledRow = styled(Row)`
  justify-content: center;

  & form {
    width: 325px;
    padding: 25px;
    background-color: #f8f9fa; 
    border-radius: 10px
  }
  & .form-label { font-weight: 500; }
  & p {
    color: red; 
    font-size: 0.8rem;
  }
`

const LoginForm = props => {
  const { register, handleSubmit, errors } = useForm()
  const [ formErrorMessage, setFormErrorMessage ] = useState({
    failed: false, 
    form: "Login failed",
    message: "Please try entering your credentials again."
  })

  const onSubmit = ({ username, password }) => {
    executeJwtAuthService(username, password)
    .then(({ data }) => {
      registerJwtLogin(username, data.token)
      props.history.push(`/welcome/${username}`)
    })
    .catch(() => {
      setFormErrorMessage({ ...formErrorMessage, failed: true })
    })
  }

  const { failed, form, message } = formErrorMessage
  return (
    <>
      <LogoHeader text={"Login Into Account"}/>
      <FormFailMessage 
        failed={failed}
        form={form}
        message={message}
      />
      <StyledRow>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text"
              name="username"
              ref={register({required: "Username required"})}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              name="password"
              ref={register({required: "Password required"})}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <FormButton text={"Login"} />
        </Form>
      </StyledRow>
      <FormFooter 
        href={"/register"}
        alt={"registration link"}
        text={"New to Todo or Not Todo?"}
        linkText={"Register a new account"}
      />
    </>
  )
}

export default LoginForm;