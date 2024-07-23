import React, { useContext } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import CartContext from "../Store/CartContext";

import ProductsArr from "./ProductsArr";
import { useNavigate } from "react-router-dom";

const Store = () => {

  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const handleRoute = (id) => {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center bg-white text-black p-4"
      >
        <Row>
          <Col className="text-center font-weight-bold">
            <h2>Music</h2>
          </Col>
        </Row>
      </Container>
      <div className="container">
        <div className="row justify-content-center">
          {ProductsArr.map((product, index) => (
            <div key={index} style={{cursor: "pointer"}} className="col-md-6 col-lg-4 mb-4 " onClick={()=>handleRoute(product.productId)}>
              <div className="card" style={{ width: "100%" }}>
                <h5 className="card-title text-center">{product.title}</h5>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="card-body">
                  <p className="card-text text-start">
                    Price: ${product.price}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={cartCtx.addItems.bind(null, product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center bg-white text-black p-5"
      >
        <Button variant="secondary">See the Cart</Button>
      </Container>
    </>
  );
};

export default Store;
