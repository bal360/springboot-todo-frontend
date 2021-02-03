import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const StyledAlert = styled(Alert)`
  margin-top: 2rem;
`

const NotFoundError = () => {
  return (
    <>
      <StyledAlert variant="danger">
        <Alert.Heading>Sorry! We couldn't find that resource.</Alert.Heading>
        <p>Try navigating back to the home page.</p>
      </StyledAlert>
    </>
  )
}

export default NotFoundError;