import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../src/Pages/About";
import Store from "./components/UI/Store";
import Home from "./Pages/Home";
import Footer from "./components/UI/Footer";
import HomeContent from "./components/UI/HomeContent";

// import UserList from './components/UserList';
// import Registration from './components/Registration';
// import Counter from './components/Counter';

function App() {
  const router = createBrowserRouter([
    { path: "/about", element: <About /> },
    { path: "/store", element: <Store /> },
    { path: "/", element: <Home /> },
  ]);

  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true);
  };

  const HideCartHandler = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      <Header showCartHandler={showCartHandler} />
      <HomeContent />
      {/* <div className="container p-4 text-center">
        <Button variant="outline-info">Get our Latest Album</Button>
        <div className="container text-center p-3">
            <img src='../Images/play-button-icon-png-17.png' alt="icon" style={{width:'40px'}} />
        </div> */}
      {show && <Cart onClose={HideCartHandler} showCart={showCartHandler} />}
      <RouterProvider router={router} />
      <Footer />
    </CartProvider>
  );
}

export default App;
