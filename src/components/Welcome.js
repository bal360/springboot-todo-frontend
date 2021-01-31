import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  justify-content: center;

  & a { color: #3D3DB2 }
`

const Welcome = () => {
  return (
    <Container>
      <StyledRow>
        <h2>Welcome, {sessionStorage.getItem('authenticatedUser')}!</h2>
      </StyledRow>
      <StyledRow>
        <p>
          Head over to your todos <Link to="/todos">here.</Link>
        </p>
      </StyledRow>
    </Container>
  )
}

export default Welcome;