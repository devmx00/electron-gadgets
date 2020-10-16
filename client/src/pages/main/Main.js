import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Jumbotron, Card, Button } from 'react-bootstrap';
import './Main.css';

const Main = () => {
  return (
    <div className='mt-4'>
      <Jumbotron>
        <h1>Electron Gadgets</h1>
        <p>
          The place where you'll find the latest electronic products at
          competitive prices!
        </p>
        <Button variant='primary' as={Link} to='/products'>
          Shop Now
        </Button>
      </Jumbotron>
      <h3>Shop Categories</h3>
      <hr />
      <Row>
        <Col sm={6} lg={3}>
          <Link to='/products/category/1'>
            <Card className='bg-dark text-white m-2 p-2'>
              <Image
                src='/img/ps-5.png'
                alt='Card image'
                className='img-fluid img-size'
              />
              <Card.Title className='text-center mt-2'>Consoles</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col sm={6} lg={3}>
          <Link to='/products/category/2'>
            <Card className='bg-dark text-white m-2 p-2'>
              <Card.Img
                src='/img/xps-13.png'
                alt='Card image'
                className='img-fluid img-size'
              />
              <Card.Title className='text-center mt-2 category-btn'>
                Laptops
              </Card.Title>
            </Card>
          </Link>
        </Col>
        <Col sm={6} lg={3}>
          <Link to='/products/category/3'>
            <Card className='bg-dark text-white m-2 p-2'>
              <Card.Img
                src='/img/nvidia-rtx-3090.png'
                alt='Card image'
                className='img-fluid img-size'
              />
              <Card.Title className='text-center mt-2'>
                Graphic Cards
              </Card.Title>
            </Card>
          </Link>
        </Col>
        <Col sm={6} lg={3}>
          <Link to='/products/category/4'>
            <Card className='bg-dark text-white m-2 p-2'>
              <Card.Img
                src='/img/sony-xm3b.png'
                alt='Card image'
                className='img-fluid img-size'
              />
              <Card.Title className='text-center mt-2'>Accessories</Card.Title>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
