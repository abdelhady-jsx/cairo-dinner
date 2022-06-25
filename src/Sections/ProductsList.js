import React, { useContext } from 'react'
import FoodContext from '../Context/FoodContext'
import ProductsListContainer from '../UI/ProductsList/ProductsList'
import Product from './Product'

const ProductsList = () => {
    const foodContext = useContext(FoodContext)
    return (
        <ProductsListContainer>
            {foodContext.food.map((recipe) => (<Product key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} />))}
        </ProductsListContainer>
    )
}

export default ProductsList