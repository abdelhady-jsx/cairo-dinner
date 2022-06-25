import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import CartContext from '../Context/CartContext'
import Navigation, { NavLink } from '../UI/Navigation/Navigation'
import Cart from '../Sections/Cart'

function NavigationSection() {
  const authContext = useContext(AuthContext)
  const cartContext = useContext(CartContext)
  return (
    <Navigation>
      <NavLink>Home</NavLink>
      <NavLink>Contact Us</NavLink>
      {authContext.loggedIn === true && (
        <>
          <NavLink onClick={authContext.logoutUser}>
            Logout, {authContext.username}
          </NavLink>
          <Cart itemsNo={Object.values(cartContext.cart).reduce((prev, cur) => +prev + +cur, 0)} />
        </>
      )}
    </Navigation>
    )
}

export default NavigationSection