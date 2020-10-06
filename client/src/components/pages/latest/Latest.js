import React, { Fragment } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';
import './Latest.css';

const Latest = () => {
  return (
    <Fragment>
      <h2 className='my-4'>New Products</h2>
      <Container>
        <Row className='border-bottom p-3'>
          <Col xs={12} sm={3}>
            <Image className='img-fluid img-size' src='img/ps-5.png' />
          </Col>
          <Col xs={12} sm={6} className='py-2'>
            <h3>Sony PlayStation 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos labore maiores optio esse, provident dolorum tenetur
              velit perspiciatis?Lorem ipsum dolor sit
            </p>
          </Col>
          <Col xs={12} sm={3} className='py-2'>
            <h3>$729.00</h3>
            <Button className='my-3'>ADD TO CART</Button>
          </Col>
        </Row>
        <Row className='border-bottom p-3'>
          <Col xs={12} sm={3}>
            <Image className='img-fluid img-size' src='img/razer-13.png' />
          </Col>
          <Col xs={12} sm={6} className='py-2'>
            <h3>Razer Stealth 13</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos labore maiores optio esse, provident dolorum tenetur
              velit perspiciatis?Lorem ipsum dolor sit
            </p>
          </Col>
          <Col xs={12} sm={3} className='py-2'>
            <h3>$3,299.00</h3>
            <Button className='my-3'>ADD TO CART</Button>
          </Col>
        </Row>
        <Row className='border-bottom p-3'>
          <Col xs={12} sm={3}>
            <Image className='img-fluid img-size' src='img/xps-13.png' />
          </Col>
          <Col xs={12} sm={6} className='py-2'>
            <h3>Dell XPS 13</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos labore maiores optio esse, provident dolorum tenetur
              velit perspiciatis?Lorem ipsum dolor sit
            </p>
          </Col>
          <Col xs={12} sm={3} className='py-2'>
            <h3>$2,099.00</h3>
            <Button className='my-3'>ADD TO CART</Button>
          </Col>
        </Row>
        <Row className='border-bottom p-3'>
          <Col xs={12} sm={3}>
            <Image
              className='img-fluid img-size'
              src='img/nvidia-rtx-3090.png'
            />
          </Col>
          <Col xs={12} sm={6} className='py-2'>
            <h3>Nvidia RTX 3090 "BFGPU"</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos labore maiores optio esse, provident dolorum tenetur
              velit perspiciatis?Lorem ipsum dolor sit
            </p>
          </Col>
          <Col xs={12} sm={3} className='py-2'>
            <h3>$2,365.00</h3>
            <Button className='my-3'>ADD TO CART</Button>
          </Col>
        </Row>
        <Row className='border-bottom p-3'>
          <Col xs={12} sm={3}>
            <Image className='img-fluid img-size' src='img/airpods.jpeg' />
          </Col>
          <Col xs={12} sm={6} className='py-2'>
            <h3>Apple Airpod</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos labore maiores optio esse, provident dolorum tenetur
              velit perspiciatis?Lorem ipsum dolor sit
            </p>
          </Col>
          <Col xs={12} sm={3} className='py-2'>
            <h3>$239.00</h3>
            <Button className='my-3'>ADD TO CART</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Latest;
