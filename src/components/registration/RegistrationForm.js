import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LogoHeader from '../LogoHeader';
import FormButton from '../form-components/FormButton';
import { registerUser } from '../../api/user/UserRegistration';
import FormFailMessage from '../form-components/FormFailMessage';
import FormFooter from '../form-components/FormFooter';

const StyledRow = styled(Row)`
  justify-content: center;
  
  & form { width: 325px; }
  & .form-row p { margin-bottom: 0; }
  & .form-label { font-weight: 500; }
  & p {
    color: red;
    font-size: 0.8rem;  
  }
`

const RegistrationForm = props => {
  const { register, handleSubmit, errors, watch } = useForm()
  const [formErrorMessage, setFormErrorMessage] = useState({
    failed: false, 
    form: "Registration failed",
    message: "Username already exists. Please try entering a different one."
  })

  const onSubmit = data => {
    const { firstName, lastName, email, username, password } = data
    registerUser({
      firstName, 
      lastName, 
      email, 
      username, 
      password
    }) 
    .catch(() => setFormErrorMessage({ ...formErrorMessage, failed: true }))
  }

  const { failed, form, message } = formErrorMessage
  return (
    <>
      <LogoHeader text={"Register New Account"} />
      <FormFailMessage 
        failed={failed}
        form={form}
        message={message}
      />
      <StyledRow>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text"
                name="firstName"
                ref={register({required: "First name required"})}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text"
                name="lastName"
                ref={register({required: "Last name required"})}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              name="email"
              ref={register({required: "Email required"})}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text"
              name="username"
              ref={register({
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Must be at least 5 characters long"
                }
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              name="password"
              ref={register({
                required: "Password required",
                minLength: {
                  value: 8,
                  message: "Must be at least 8 characters long"
                },
                validate: (value) => {
                  return [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
                  .every((pattern) => pattern.test(value))
                  ||
                  "Must include at least one of each: lowercase letter, uppercase letter, number, special character"
                } 
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password"
              name="confirmPassword"
              ref={register({
                required: "You must confirm your password",
                validate: (value) => {
                  return value === watch('password') || <div>The passwords do not match</div>
                }
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </Form.Group>
          <FormButton text={"Register Account"} />
        </Form>
      </StyledRow>
      <FormFooter 
        href={"/login"}
        alt={"login link"}
        text={"Already have an account?"}
        linkText={"Let's head over to login"}
      />
    </>
  )
}

export default RegistrationForm;