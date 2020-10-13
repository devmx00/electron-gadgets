import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { userLogin } from '../../actions/authActions';

const Login = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return console.log('Invalid Credentials.');

    dispatch(
      userLogin(formData, function (err) {
        if (err) return console.log('Login failed.');
        if (props.location.state.previousPath === '/cart') {
          return props.history.push('/checkout');
        }
        return props.history.push('/');
      })
    );
  };

  return (
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col sm={12} md={6} lg={4} className='my-5'>
          <Card className='my-3'>
            <Card.Body>
              <Card.Title as='h2'>Sign In</Card.Title>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    className='form-control'
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter email'
                    onChange={handleChange}
                    value={email}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    className='form-control'
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <Button variant='info' className='btn-block' type='submit'>
                  Sign In
                </Button>
                <Card.Text className='mt-2'>
                  Don't have an account?{' '}
                  <Card.Link as={Link} to='/register'>
                    Sign up here
                  </Card.Link>
                </Card.Text>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
