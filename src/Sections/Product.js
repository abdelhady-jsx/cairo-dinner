import React, { useState, useContext } from 'react'
import Button from '../UI/Button/Button'
import { ProductContainer, ProductImage, ProductDescription, ProductActions } from '../UI/ProductsList/ProductsList'
import CartContext from '../Context/CartContext'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

const Product = ({ id, name, image, price, alertUser }) => {
    const [ quantity, setQuantity ] = useState(0)
    const { addToCart } = useContext(CartContext)
    const addQuantity = () => quantity < 10 && setQuantity((prevQty) => +prevQty + 1)
    const removeQuantity = () => quantity > 0 && setQuantity((prevQty) => +prevQty - 1)
    const handleAddToCart = () => {
        try {
            addToCart(id, quantity)
            setQuantity(0)
        } catch(e) {
            alertUser(true, 'Encountered an error :(', e.message)
        }
    }
    return (<>
        <ProductContainer key={id} id={id}>
            <ProductImage src={image} alt={name} />
            <ProductDescription>
                <p>{name}</p>
                <p>Price: £E{price}</p>
                <ProductActions>
                    <Button style={{ margin: '0 15px', borderRadius: '10px' }} text={'Add to Cart'} onClick={handleAddToCart} />
                    <Button style={{ borderRadius: '10px' }} text={<FaPlus />} onClick={addQuantity} disabled={quantity >= 10} />
                    <p style={{ margin: '0 15px' }}>{quantity}</p>
                    <Button style={{ borderRadius: '10px' }} text={<FaMinus />} onClick={removeQuantity} disabled={quantity <= 0} />
                </ProductActions>
            </ProductDescription>
        </ProductContainer>
    </>)
}

export default Product