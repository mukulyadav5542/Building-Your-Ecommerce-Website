import React from 'react'

const CartContext = React.createContext({
  cart: [],
  addItems: (items) => {},
  removeItems: (items) => {}
})

export default CartContext