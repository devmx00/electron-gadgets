import React from 'react';
import { Modal } from 'react-bootstrap';
import Loader from '../loader/Loader';

const Model = ({ show }) => {
  return (
    <Modal show={show} backdrop='static' keyboard={false}>
      <Modal.Body>
        <Loader loaderMsg='Processing payment...' />
      </Modal.Body>
    </Modal>
  );
};

export default Model;
