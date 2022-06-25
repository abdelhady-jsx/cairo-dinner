import { createContext } from 'react'

const CartContext = createContext({ cart: {}, addToCart: (id, quantity) => {} })

export default CartContext