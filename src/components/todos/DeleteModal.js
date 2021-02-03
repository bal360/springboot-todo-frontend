import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteModal = ({ onDelete }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        onClick={handleShow}
        variant="light"
      >
        <FaRegTrashAlt size={20} />
      </Button>
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
          <Button>
            Delete it.
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteModal;