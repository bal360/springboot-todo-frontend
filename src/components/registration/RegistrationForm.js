import React from 'react';
import { Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LogoHeader from '../FormHeader';



const StyledRow = styled(Row)`
  justify-content: center;
`

const RegistrationForm = props => {
  const { register, handleSubmit, errors, watch } = useForm()

  const onSubmit = data => {
    const { username, password, firstName, lastName, email } = data
    // fetch function coming
    // registerUser() 
  }

  return (
    <>
      <LogoHeader text={"Register New Account"} />
      <StyledRow>
        <Form>

        </Form>
      </StyledRow>
    </>
  )
}

export default RegistrationForm;