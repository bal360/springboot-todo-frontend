import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaRegTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  color: #3D3DB2 !important;
  background-color: #f8f9fa;
  border-color: #3D3DB2 !important;
  :hover {
    background-color: #3D3DB2 !important;
    border-color: #fff !important;
  }
`
const ModalButton = styled(Button)`
  background-color: #3D3DB2 !important;
  border-color: #3D3DB2 !important;
`

const DeleteModal = ({ onClickDelete }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <StyledButton
        onClick={handleShow}
      >
        <FaRegTrashAlt size={20} />
      </StyledButton>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          Are we deleting this todo for sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Nah.
          </Button>
          <ModalButton onClick={onClickDelete}>
            Delete it.
          </ModalButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteModal;