import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 1.5rem;

  & a { 
    color: #3D3DB2; 
    text-decoration: none;
  }
`

const FormFooter = ({ text, href, alt, linkText }) => {
  return (
    <StyledRow>
      <span>{text}</span>
      &ensp;
      <a
        href={href}
        alt={alt}
      >
        {linkText}
      </a>
    </StyledRow>
  )
}

export default FormFooter;