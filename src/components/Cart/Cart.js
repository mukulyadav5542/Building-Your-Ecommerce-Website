import React, { useContext } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import classes from "./Cart.module.css";
// import cartElements from "./CartElements";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal show={props.showCart} onHide={props.onClose} animation={false}>
      {/* <div className='container'>
            <h3 className='text-center'>Cart</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {cartElements.map((product, index) => (
                    <tr key={index}>
                            <img src={product.imageUrl} alt={product.title} style={{ width: "100%", height: "120px" }} />
                            <td>Rs. {product.price}</td>
                            <td>{product.quantity}</td>
                            <button className='btn btn-danger' style={{backgroundColor: "#DC4C64"}} onClose>REMOVE</button>
                    </tr >
                    ))}
                </tbody>
            </Table>
        </div> */}
      {/* <div className="container">
        <h3 className="text-center">CART</h3>
        <button className="text-end" onClick={props.onClose}>
          X
        </button>
        <hr /> */}
      <Modal.Header closeButton>
        <Modal.Title>CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cartCtx.cart.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{ width: "80px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>Rs.{product.price}</td>
                <td>{product.quantity}</td>
                {/* <button
                  className="btn btn-danger"
                  style={{ backgroundColor: "#DC4C64" }}
                >
                  REMOVE
                </button>
                <button>-</button>
                <button>+</button> */}
                <td>
                  <div className={classes.parent}>
                    <Button variant="outline-warning">-</Button>
                    <Button variant="outline-warning">+</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      {/* </div> */}
      <Modal.Footer>
        <h3>Total Amount: ${}</h3>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
        <Button variant="secondary">Purchase</Button>
      </Modal.Footer>
      {/* <h3>Total Amount: Rs.{}</h3>
      {<button className="btn btn-primary m-2">Purchase</button>} */}
    </Modal>
  );
};

export default Cart;
