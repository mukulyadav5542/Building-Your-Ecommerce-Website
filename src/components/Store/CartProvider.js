// import React, { useContext, useEffect, useState } from "react";
// import CartContext from "./CartContext";
// import axios from "axios";
// import AuthContext from "./auth-context";

// const CartProvider = (props) => {
//   const [cart, setCart] = useState([]);
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   const userEmail = useContext(AuthContext);
//   const emailWithoutDot = userEmail.email
//     .toString()
//     .replace(/[@.]/g, "");
//   console.log(userEmail);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(
//           `https://crudcrud.com/api/8b573a6949704c2f9224c674540b5b8e/cart${userEmail
//             .toString()
//             .replace(/[@.]/g, "")}`
//         );
//         setCart(response.data);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };
//     if (isCartVisible) {
//       fetchCartItems();
//     }
//   }, [isCartVisible, userEmail]);

//   const addItems = async (newItem) => {
//     const existingItemIndex = cart.findIndex(
//       (item) => item.productId === newItem.productId
//     );
//     const existingItem = cart[existingItemIndex];
//     let updatedCart;
//     if (existingItem) {
//       const updatedItem = {
//         ...existingItem,
//         quanity: existingItem.quantity + 1,
//       };
//       updatedCart = [...cart];
//       updatedCart[existingItemIndex] = updatedItem;
//       setCart(updatedCart);
//     } else {
//       // const updatedNewItem = {
//       //   ...newItem,
//       //   quantity: 1,
//       // };
//       // updatedCart = [...cart, updatedNewItem];
//       // setCart(updatedCart);
//       const cartItemWithQuantity = {...newItem, quantity: 1};
//       console.log(cartItemWithQuantity);
//       setCart((prevCartItems) => [...prevCartItems, cartItemWithQuantity]);

//       try {
//         const response = await axios.get(`https://crudcrud.com/api/8b573a6949704c2f9224c674540b5b8e/cart${userEmail
//         .toString()
//         .replace(/[@.]/g, "")}`, cartItemWithQuantity
//         )
//         console.log('Item added to cart:', response.data);
//       } catch (error) {
//         console.error('Error adding item to cart:', error);
//       }
//     }
//   };

//   const removeItems = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//   };

//   const onCartVisibleHandler = () => {
//     setIsCartVisible((prev) => !prev);
//   };

//   const obj = {
//     isCartVisible,
//     cart,
//     addItems,
//     removeItems,
//     onVisible: onCartVisibleHandler,
//   };

//   return (
//     <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
//   );
// };

// export default CartProvider;

import React, { useContext, useEffect, useState } from "react";
import CartContext from './CartContext';
import AuthContext from "./auth-context";
import axios from "axios";


const CartProvider = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const userEmail = useContext(AuthContext);
  const emailWithoutDot = userEmail.email.toString().replace(/[@.]/g, "");
  console.log(userEmail);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/8b573a6949704c2f9224c674540b5b8e/cart${userEmail
            .toString()
            .replace(/[@.]/g, "")}`
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (isCartVisible) {
      fetchCartItems();
    }
  }, [isCartVisible, userEmail]);

  const addToCartHandler = async (cartItemToAdd) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === cartItemToAdd.title
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCart);
    } else {
      const cartItemWithQuantity = { ...cartItemToAdd, quantity: 1 };
      console.log(cartItemWithQuantity);
      setCartItems((prevCartItems) => [...prevCartItems, cartItemWithQuantity]);

      try {
        const response = await axios.post(
          `https://crudcrud.com/api/8b573a6949704c2f9224c674540b5b8e/cart${userEmail
            .toString()
            .replace(/[@.]/g, "")}`,
          cartItemWithQuantity
        );
        console.log("Item added to cart:", response.data);
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

  const removeFromCartHandler = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const onCartVisibleHandler = () => {
    setIsCartVisible((prev) => !prev);
  };

  const cartDetails = {
    isCartVisible: isCartVisible,
    onVisible: onCartVisibleHandler,
    cart: cartItems,
    addItems: addToCartHandler,
    removeItems: removeFromCartHandler,
  };

  return (
    
      <CartContext.Provider value={cartDetails}>
        {props.children}
      </CartContext.Provider>
     
  ) 
};

export default CartProvider;
