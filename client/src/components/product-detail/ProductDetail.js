import React from 'react';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/image';
import Card from 'react-bootstrap/card';
import Tab from 'react-bootstrap/tab';
import Tabs from 'react-bootstrap/tabs';
import { addItem } from '../../actions/cartActions';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  if (!!product && product !== 'undefined') {
    return (
      <Card className='mt-5'>
        <Row className='d-flex justify-content-center mt-4 mx-4 px-1'>
          <Col sm={12} md={4} className='text-center my-auto'>
            <Image src={product.img} className=' img-fluid img-size' />
          </Col>
          <Col sm={12} md={6} className=''>
            <h3 className='my-3 pt-3 ml-4'>{product.title}</h3>
            <ul>
              {!!product && product !== 'undefined'
                ? product.about.map((about, idx) => (
                    <li key={idx}>
                      <p>{about}</p>
                    </li>
                  ))
                : ''}
            </ul>
            <div className='ml-3 mt-5'>
              <h4>${product.price}</h4>
              <button
                className='btn btn-primary'
                onClick={() => dispatch(addItem(product))}
              >
                ADD TO CART
              </button>
            </div>
          </Col>
          <Col sm={12} className='px-5 my-5'>
            <Tabs
              defaultActiveKey='home'
              transition={false}
              id='noanim-tab-example'
            >
              <Tab eventKey='home' title='Description'>
                <hr />
                <p>{product.description}</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Card>
    );
  }
  return '';
};

export default ProductDetail;
