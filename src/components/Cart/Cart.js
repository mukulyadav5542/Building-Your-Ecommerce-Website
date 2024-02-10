import React from 'react';
import { Modal, Table } from 'react-bootstrap';
import cartElements from './CartElements';

const Cart = (props) => {
  return (
    <Modal show={props.showCart} onHide={props.onClose}>
        <div className='container'>
            <h3 className='text-center'>Cart</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>PRICE: (Rs.)</th>
                        <th>QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {cartElements.map((product, index) => (
                    <tr key={index}>
                            <img src={product.imageUrl} alt={product.title} style={{ width: "100%", height: "120px" }} />
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <button className='btn btn-danger' style={{backgroundColor: "#DC4C64"}} onClose>REMOVE</button>
                    </tr >
                    ))}
                </tbody>
            </Table>
        </div>
    </Modal>
  )
}

export default Cart