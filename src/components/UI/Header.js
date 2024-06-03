import React, { useContext } from "react";
import { Nav, Button } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
//import ProductsArr from "./ProductsArr";
// import Cart from '../Cart/Cart';
import CartContext from "../Store/CartContext";
// import { Link } from "react-router-dom";

const Header = (props) => {

  const cartCtx = useContext(CartContext);

  return (
    <>
      <Nav
        className="justify-content-center bg-dark text-light p-2"
        activeKey="/home"
      >
          <a href='/' className="m-2">HOME</a>
          <a href="/store" className="m-2">STORE</a>
          <a href="/about" className="m-2">ABOUT</a>
          <a href="/contact-us" className="m-2">Contact Us</a>

          <Button variant="warning" onClick={props.showCartHandler} className="m-2">
            CART:{cartCtx.cart.length}
          </Button>
      </Nav>
      

      {/* <Navbar bg="dark" expand="sm" variant="dark">
        <Container text="text-center">
          <NavLink href="/home">HOME</NavLink>
          <NavLink eventKey="link-1">STORE</NavLink>
          <NavLink to="/About" eventKey="link-2">ABOUT</NavLink>
          <Button variant="primary" onClick={props.showCartHandler}>Cart: {cartCtx.cart.length}</Button>
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
                  <button className="btn btn-primary" onClick={cartCtx.addItems.bind(null, product)}>Add to cart</button>
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
              <h1>The Generics</h1>
            </Col>
            <Col className='d-flex text-end'>
              <p className='p-3'>Youtube</p>
              <p className='p-3'>spotify</p>
              <p className='p-3'>facebook</p>
            </Col>
          </Row>
        </Container>
      </footer> */}
    </>
  );
};

export default Header;
