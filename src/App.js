import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import About from "../src/Pages/About";
import Store from "./components/UI/Store";
import Home from "./Pages/Home";
import Footer from "./components/UI/Footer";
import HomeContent from "./components/UI/HomeContent";
import ContactUs from "./Pages/ContactUs";
import ProductsPage from "./Pages/ProductsPage";
import Login from "./Pages/Login";
import AuthContext from "./components/Store/auth-context";

// import UserList from './components/UserList';
// import Registration from './components/Registration';
// import Counter from './components/Counter';

function App() {
  // const router = createBrowserRouter([
  //   { path: "/about", element: <About /> },
  //   { path: "/store", element: <Store /> },
  //   { path: "/", element: <Home /> },
  //   { path: "/contact-us", element: <ContactUs />},
  // ]);

  const authCtx = useContext(AuthContext);

  // const navigate = useNavigate();

  // const reDirect = authCtx.isLoggedIn;

  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true);
  };

  const HideCartHandler = () => {
    setShow(false);
  };

  // useEffect(() => {
  //   if (authCtx.isLoggedIn) {
  //     navigate("/store");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [reDirect]);

  return (
    <>
      <Header showCartHandler={showCartHandler} />
      <HomeContent />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {!authCtx.isLoggedIn && (
          <Route path="/about" element={<About />}></Route>
        )}
        <Route path="/store" element={<Store />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/products/:productId" element={<ProductsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      {/* <div className="container p-4 text-center">
        <Button variant="outline-info">Get our Latest Album</Button>
        <div className="container text-center p-3">
            <img src='../Images/play-button-icon-png-17.png' alt="icon" style={{width:'40px'}} />
        </div> */}
      {show && <Cart onClose={HideCartHandler} showCart={showCartHandler} />}
      {/* <RouterProvider router={router} /> */}
      <Footer />
    </>
  );
}

export default App;
