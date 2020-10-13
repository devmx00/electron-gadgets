import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/image';
import Jumbotron from 'react-bootstrap/jumbotron';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import './Main.css';

const Main = () => {
  return (
    <div className='mt-4'>
      <Jumbotron>
        <h1>Electron Gadgets</h1>
        <p>
          The place where you'll find the latest electronic products at
          extravagant prices! Your welcome.
        </p>
        <Button variant='primary' as={Link} to='/products'>
          See More
        </Button>
      </Jumbotron>
      <Row>
        <Col sm={6} md={3} className='my-4'>
          <Card className='p-2'>
            <Image src='/img/ps-5.png' className='img-fluid img-size' />
            <Button as={Link} to='/products/category/1'>
              Consoles
            </Button>
          </Card>
        </Col>
        <Col sm={6} md={3} className='my-4'>
          <Card className='p-2'>
            <Image src='/img/xps-13.png' className='img-fluid img-size' />
            <Button as={Link} to='/products/category/2'>
              Laptops
            </Button>
          </Card>
        </Col>
        <Col sm={6} md={3} className='my-4'>
          <Card className='p-2'>
            <Image
              src='/img/nvidia-rtx-3090.png'
              className='img-fluid img-size'
            />
            <Button as={Link} to='products/category/3'>
              Graphic Cards
            </Button>
          </Card>
        </Col>
        <Col sm={6} md={3} className='my-4'>
          <Card className='p-2'>
            <Image src='/img/airpods.jpeg' className='img-fluid img-size' />
            <Button as={Link} to='products/category/4'>
              Accessories
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
