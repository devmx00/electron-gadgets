import React from 'react';
import Alert from 'react-bootstrap/alert';

export default ({ variant, alertMsg }) => (
  <Alert variant={variant}>{alertMsg}</Alert>
);
