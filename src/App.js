import React, { useState } from "react";
import "./App.css";
import HBF from "./components/UI/HBF";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
// import UserList from './components/UserList';
// import Registration from './components/Registration';
// import Counter from './components/Counter';

function App() {

  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true);
  };

  const HideCartHandler = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      <HBF showCartHandler={showCartHandler} />
      {show && <Cart onClose={HideCartHandler} showCart={showCartHandler} />}
    </CartProvider>
  );
}

export default App;
