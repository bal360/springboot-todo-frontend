import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  & .row { justify-content: center; }
  & small { color: #3D3DB2; }
`

const Footer = () => {
  return (
    <StyledContainer>
      <Row>
        <small>&copy; {new Date().getFullYear()} blakeallanlong.dev</small>
      </Row>
    </StyledContainer>
  )
}

export default Footer;