import React, { useContext } from "react";
import { Modal, Table } from "react-bootstrap";
import CartContext from "../Store/CartContext";
// import cartElements from "./CartElements";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal show={props.showCart} onHide={props.onClose}>
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
      <div className="container">
        <h3 className="text-center">CART</h3>
        <button className="text-end" onClick={props.onClose}>
          X
        </button>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cartCtx.cart.map((product, index) => (
              <tr key={index}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{ width: "100%", height: "100px" }}
                  />
                  <td>Rs.{product.price}</td>
                  <td>{product.quantity}</td>
                  <button
                    className="btn btn-danger"
                    style={{ backgroundColor: "#DC4C64" }}
                  >
                    REMOVE
                  </button>
                <button>-</button>
                <button>+</button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <h3>Total Amount: Rs.{}</h3>
      {<button className="btn btn-primary m-2">Purchase</button>}
    </Modal>
  );
};

export default Cart;
