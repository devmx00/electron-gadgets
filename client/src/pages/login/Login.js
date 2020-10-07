import React, { Fragment } from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

const Login = () => {
  return (
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col sm={12} md={6} lg={4} className="my-5">
          <Card className='my-3'>
            <Card.Body>
              <Card.Title as='h2'>Sign In</Card.Title>
              <Form>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Button variant='info' type='submit'>
                  Sign In
                </Button>
                <Card.Text>
                  Don't have an account? <Card.Link>Register here</Card.Link>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
