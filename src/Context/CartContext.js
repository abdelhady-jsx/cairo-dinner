import { createContext } from 'react'

const CartContext = createContext({ cart: {}, addToCart: (id, quantity) => {}, removeFromCart: (id) => {} })

export default CartContext