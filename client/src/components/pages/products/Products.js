import React from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import categories from './catDummy';
import './Products.css';

const Products = () => {
  return (
    <div className='my-2'>
      <h2 className='my-4'>Categories</h2>
      <Row>
        <CardDeck>
          {categories.map(({ id, title, image }) => (
            <Col key={id} sm={12} md={6} lg={3}>
              <Card className='my-4 p-2'>
                <Card.Img className='p-2' variant='top' src={image} />
                <Card.Body className='d-flex flex-column justify-content-end'>
                  <Card.Title className='text-center'>{title}</Card.Title>
                  <Button variant='secondary'>See more</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </CardDeck>
      </Row>
    </div>
  );
};

export default Products;
