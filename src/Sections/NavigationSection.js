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
      <NavLink linkTo={'https://google.com'} linkText={'Order food'} />
      <NavLink>Contact Us</NavLink>
      {authContext.loggedIn === true && (
        <>
          <NavLink onClick={authContext.logoutUser}>
            Logout, {authContext.username}
          </NavLink>
          <Cart itemsNo={Object.keys(cartContext.cart).length} />
        </>
      )}
    </Navigation>
    )
}

export default NavigationSection