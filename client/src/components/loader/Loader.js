import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ loaderMsg }) => {
  return (
    <div className='text-center'>
      <Spinner
        animation='border'
        style={{ width: '3rem', height: '3rem' }}
        variant='primary'
      />
      <span>{loaderMsg}</span>
    </div>
  );
};

export default Loader;
