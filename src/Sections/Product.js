import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import { ProductContainer, ProductImage, ProductDescription, ProductActions } from '../UI/ProductsList/ProductsList'

const Product = ({ id, name, image }) => {
    const [ quantity, setQuantity ] = useState(0)
    const addQuantity = () => quantity < 10 && setQuantity((prevQty) => +prevQty + 1)
    const removeQuantity = () => quantity > 0 && setQuantity((prevQty) => +prevQty - 1)
    return (<>
        <ProductContainer key={id} id={id}>
            <ProductImage src={image} alt={name} />
            <ProductDescription>
                <p>{name}</p>
                <ProductActions>
                    <Button style={{ margin: '0 15px', borderRadius: '10px' }} text={'Add to Cart'} />
                    <Button style={{ borderRadius: '10px' }} text={'+'} onClick={addQuantity} disabled={quantity >= 10} />
                    <p style={{ margin: '0 15px' }}>{quantity}</p>
                    <Button style={{ borderRadius: '10px' }} text={'-'} onClick={removeQuantity} disabled={quantity <= 0} />
                </ProductActions>
            </ProductDescription>

        </ProductContainer>
    </>)
}

export default Product