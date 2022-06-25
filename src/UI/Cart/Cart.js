import classes from './Cart.module.css'
import { FaCartArrowDown } from 'react-icons/fa'

const CartWrapper = (props) => <div {...props} className={classes.cartWrapper}>
    <FaCartArrowDown /> ({ props.count })
    {props.children}
</div>

export const CartList = (props) => <div {...props} className={classes.cartList}>{props.children}</div>
export const CartProduct = (props) => <div {...props} className={classes.cartProduct}>{props.children}</div>

export default CartWrapper