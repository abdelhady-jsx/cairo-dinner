import React, { useContext } from 'react'
import CartWrapper, { CartList, CartProduct } from '../UI/Cart/Cart'
import FoodContext from '../Context/FoodContext'
import CartContext from '../Context/CartContext'
import { GiCrossMark } from 'react-icons/gi'
import Button from '../UI/Button/Button'

const Cart = ({ itemsNo }) => {
    const foodContext = useContext(FoodContext)
    const cartContext = useContext(CartContext)
    const totalProducts = Object.entries(cartContext.cart).length
    let totalCosts = 0
    Object.entries(cartContext.cart).forEach(([key, value]) => {
        const foodEntry = foodContext.food.filter((recipe) => recipe.id === key)[0]
        totalCosts += Math.round(+value * +foodEntry.price)
    })
    return (<CartWrapper count={itemsNo}>
        <CartList>
            {totalProducts <= 0 && <CartProduct>Add recipes to the cart to show them here.</CartProduct>}
            {totalProducts > 0 && Object.entries(cartContext.cart).map(([key, value]) => {
                const foodEntry = foodContext.food.filter((recipe) => recipe.id === key)[0]
                return <CartProduct key={key}>
                    <img style={{ maxWidth: '100px', borderRadius: '20px' }} src={foodEntry && foodEntry.image} alt={foodEntry && foodEntry.name} />
                    <p style={{ maxWidth: '100px', textAlign: 'center' }}>{foodEntry && foodEntry.name}</p>
                    <p>Amount: {value}</p>
                    <p>Price: £E{foodEntry && foodEntry.price}</p>
                    <GiCrossMark onClick={() => cartContext.addToCart(key, -1)} />
                    </CartProduct>
            })}
            {totalProducts > 0 && (<CartProduct>
                <p>Total: £E{totalCosts}</p>
                <Button text={'Order Now'} />
            </CartProduct>)}
        </CartList>
    </CartWrapper>)
}

export default Cart