import React from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';
import { Link } from 'react-router-dom';

import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <Row className='border-bottom p-3'>
      <Col xs={12} sm={3} className='text-center'>
        <Image className='img-fluid img-size' src={product.img} />
      </Col>
      <Col xs={12} sm={6} className='py-2'>
        <Link to={`/product/${product.id}`}>
          <h4>{product.title}</h4>
        </Link>
      </Col>
      <Col xs={12} sm={3} className='my-2'>
        <h4>${product.price}</h4>
        <Button>ADD TO CART</Button>
      </Col>
    </Row>
  );
};

export default ProductItem;
