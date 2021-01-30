import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
`

const RegistrationForm = () => {
  return (
    <div>
      <StyledButton>Submit</StyledButton>
    </div>
  )
}

export default RegistrationForm;