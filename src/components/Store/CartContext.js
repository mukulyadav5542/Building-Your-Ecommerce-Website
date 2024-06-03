import React from 'react';

const CartContext = React.createContext({
  cart: [],
  addItems: (items) => {},
  removeItems: (items) => {},
  ContactUs: []
})

export default CartContext