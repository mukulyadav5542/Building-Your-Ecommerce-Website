import React from 'react';

const CartContext = React.createContext({
  cart: [],
  isCartVisible: false,
  onVisible: () => {},
  addItems: (items) => {},
  removeItems: (id) => {},
  ContactUs: []
})

export default CartContext