import React from 'react';
import { Row } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  justify-content: center !important;
  margin: 1.5rem 0 !important;
  padding: 1rem 0 !important;
`
const Heading = styled.h2`
  text-align: center;
  color: #3D3DB2;
  margin: 1rem 0;
  padding: 0 0 1.75rem 0;
`

const LogoHeader = ({ text }) => {
  return (
    <>
      <StyledRow>
        <FcTodoList size={60} />
      </StyledRow>
      <Heading>{text}</Heading>
    </>
  )
}

export default LogoHeader;