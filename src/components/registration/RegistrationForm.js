import React from 'react';
import { Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LogoHeader from '../FormHeader';

const StyledRow = styled(Row)`
  justify-content: center;
`
const StyledForm = styled(Form)`
  width: 325px;
`

const StyledError = styled.p`
  color: red;
  font-size: 0.8rem;
`

const RegistrationForm = props => {
  const { register, handleSubmit, errors, watch } = useForm()

  // const onSubmit = data => {
  //   const { username, password, firstName, lastName, email } = data
  //   // fetch function coming
  //   // registerUser() 
  // }

  return (
    <>
      <LogoHeader text={"Register New Account"} />
      <StyledRow>
        <StyledForm>
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
            {errors.username && <StyledError>{errors.username.message}</StyledError>}
          </Form.Group>
        </StyledForm>
      </StyledRow>
    </>
  )
}

export default RegistrationForm;