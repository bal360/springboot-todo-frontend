import React from 'react';
import { Row } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  justify-content: center !important;
  margin: 1.5rem 0 !important;
  padding: 1rem 0 !important;
`

const LogoHeader = () => {
  return (
    <StyledRow>
      <FcTodoList size={60} />
    </StyledRow>
  )
}

export default LogoHeader;