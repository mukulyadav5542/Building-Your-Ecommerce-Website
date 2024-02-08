import React from 'react';
import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import ProductsArr from "./ProductsArr";

const HBF = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container text="text-center">
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Navbar.Brand href="/">STORE</Navbar.Brand>
          <Navbar.Brand href="/">ABOUT</Navbar.Brand>
          <Button variant="primary">Cart: {0}</Button>
        </Container>
      </Navbar>

      <Container
        fluid
        className="d-flex justify-content-center bg-secondary text-white p-5"
      >
        <Row>
          <Col>
            <h1>The Generics</h1>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="d-flex justify-content-center bg-white text-black p-4"
      >
        <Row>
          <Col>
            <h2>MUSIC</h2>
          </Col>
        </Row>
      </Container>

      <div className="container">
        <div className="row justify-content-center">
          {ProductsArr.map((product, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "100%" }}>
                <h5 className="card-title text-center">{product.title}</h5>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                  style={{ width: "100%", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text text-start">
                    Price: Rs.{product.price}
                  </p>
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container fluid className="d-flex align-items-center justify-content-center bg-white text-black p-5">
        <Button variant="secondary">See the cart</Button>
      </Container>

      <footer>
        <Container fluid className="d-flex justify-content-center bg-info text-white p-2">
          <Row>
            <Col className="text-start">
              <h3>The Generics</h3>
            </Col>
            <Col className='d-flex text-end'>
              <p className='p-3'>Youtube</p>
              <p className='p-3'>spotify</p>
              <p className='p-3'>facebook</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>  
  )
}

export default HBF;