import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #3D3DB2 !important;
  display: block;
  width: 100%;
  border: none !important;
`

const FormButton = ({ text }) => {
  return (
    <StyledButton type="submit">
      {text}
    </StyledButton>
  )
}

export default FormButton;