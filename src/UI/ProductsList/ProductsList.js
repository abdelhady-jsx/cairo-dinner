import classes from './ProductsList.module.css'
const ProductsListContainer = (props) => <div {...props} className={classes.productsListContainer}>{props.children}</div>
export const ProductContainer = (props) => <div {...props} className={classes.productContainer}>{props.children}</div>
export const ProductImage = (props) => <img {...props} alt={props.alt} className={classes.productImage}>{props.children}</img>
export const ProductDescription = (props) => <div {...props} className={classes.productDescription}>{props.children}</div>
export const ProductActions = (props) => <div {...props} className={classes.productActions}>{props.children}</div>
export default ProductsListContainer