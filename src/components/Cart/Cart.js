// import React, { useContext } from "react";
// import { Modal, Table, Button } from "react-bootstrap";
// import CartContext from "../Store/CartContext";
// import classes from "./Cart.module.css";
// // import cartElements from "./CartElements";

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);

//   return (
//     <Modal show={props.showCart} onHide={props.onClose} animation={false}>
//       <Modal.Header closeButton>
//         <Modal.Title>CART</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ITEM</th>
//               <th>TITLE</th>
//               <th>PRICE</th>
//               <th>QUANTITY</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartCtx.cart.map((product, index) => (
//               <tr key={index}>
//                 <td>
//                   <img
//                     src={product.imageUrl}
//                     alt={product.title}
//                     style={{ width: "80px" }}
//                   />
//                 </td>
//                 <td>{product.title}</td>
//                 <td>Rs.{product.price}</td>
//                 <td>{product.quantity}</td>
//                 <td>
//                   <div className={classes.parent}>
//                     <Button variant="outline-warning">-</Button>
//                     <Button variant="outline-warning">+</Button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Modal.Body>
//       {/* </div> */}
//       <Modal.Footer>
//         <h3>Total Amount: ${}</h3>
//         <Button variant="secondary" onClick={props.onClose}>
//           Close
//         </Button>
//         <Button variant="secondary">Purchase</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import Model from "../UI/Model";
import CartContext from "../Store/CartContext";


const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartCtx.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const onClose = () => {
    cartCtx.onVisible();
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItems(id);
  };

  if (totalItems === 0) {
    return (
      <Model onClose={onClose}>
        <div className="p-10 text-center text-2xl font-semibold text-red-500">
          Cart Is Empty Please add Items!!!
        </div>
        <button
          onClick={onClose}
          className="bg-red-600 absolute top-4 right-4 px-2 font-bold text-white hover:scale-110 duration-500 transition-transform"
        >
          X
        </button>
      </Model>
    );
  }
  return (
    <Model className="max-w-[300px] p-4" onClose={onClose}>
      <button
        onClick={onClose}
        className="bg-red-600 absolute top-4 right-4 px-2 font-bold text-white hover:scale-110 duration-500 transition-transform"
      >
        X
      </button>
      <h1 className="font-metal-mania text-2xl mb-3  text-center">Cart</h1>

      <div className="grid grid-cols-12 justify-center mx-auto text-xl font-bold font-serif">
        <div className="border-b-2 col-span-5 text-center   border-black mx-2">
          Items
        </div>
        <div className="border-b-2 col-span-2  text-center border-black mx-2">
          Price
        </div>
        <div className="border-b-2 col-span-5  text-center border-black mx-2">
          <div>Quantity</div>
        </div>
      </div>
      <div className="overflow-auto max-h-80">
        {cartCtx.cart.map((cart) => {
          console.log(cart);
          return (
            <div className="grid grid-cols-12 justify-center   mx-2 my-4">
              <div className=" flex flex-col-reverse md:flex-row justify-start gap-2 items-center  border-b-2 col-span-5 py-1 border-black md:mx-2 text-lg font-semibold">
                <img
                  src={cart.imageUrl}
                  className="w-24 h-24"
                  alt="img"
                  height={100}
                  width={100}
                />
                <div>{cart.title}</div>
              </div>
              <div className="border-b-2 col-span-2 text-xl  text-center border-black mx-2">
                {cart.price}
              </div>
              <div className="border-b-2 col-span-5 flex gap-3 justify-center  border-black mx-2">
                <div>
                  <input
                    className="border border-gray-800 text-center w-8 text-xl"
                    value={cart.quantity}
                  />
                </div>
                <div>
                  <button
                    onClick={() => removeItemHandler(cart.id)}
                    className="bg-red-600 px-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-xl font-bold ml-2">Total Price : ${totalPrice}</div>
    </Model>
  );
};

export default Cart;
