import React from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/image';
import Card from 'react-bootstrap/card';
import Tab from 'react-bootstrap/tab';
import Tabs from 'react-bootstrap/tabs';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <Card className='mt-5'>
      <Row className='d-flex justify-content-center mt-4 mx-4 px-1'>
        <Col sm={12} md={4} className='text-center my-auto'>
          <Image src='/img/xps-13.png' className=' img-fluid img-size' />
        </Col>
        <Col sm={12} md={6} className=''>
          <h2 className='my-3 pt-3 ml-4'>Dell XPS 13</h2>
          <ul>
            <li className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              est?
            </li>
            <li className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              est?
            </li>
            <li className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              est?
            </li>
            <li className='p-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              est?
            </li>
          </ul>
          <div className='ml-3 mt-5'>
            <h3>$199.00</h3>
            <button className='btn btn-primary'>ADD TO CART</button>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                explicabo officia quae, repellendus maiores odit suscipit itaque
                minus ab consequuntur quis, nihil asperiores doloremque. Illo
                quo illum cumque quos officiis odio, sed harum repudiandae
                sequi, deleniti asperiores eaque quae tempore. Eveniet
                laudantium quasi libero adipisci alias eius dolores modi a!
              </p>
            </Tab>
            <Tab eventKey='profile' title='Specifications'>
              <hr />
              <ul className=''>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, est?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, est?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, est?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, est?
                </li>
              </ul>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductDetail;
