import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteModal = ({ onDelete }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  return (
    <>
      DeleteModal
    </>
  )
}

export default DeleteModal;