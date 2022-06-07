import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import Navigation, { NavLink } from '../UI/Navigation/Navigation'

function NavigationSection() {
  const authContext = useContext(AuthContext)
  return (
      <Navigation>
        <NavLink>Home</NavLink>
        <NavLink linkTo={'https://google.com'} linkText={'Order food'} />
        <NavLink>Contact Us</NavLink>
        {authContext.loggedIn === true && (
          <NavLink onClick={authContext.logoutUser}>
            Logout, {authContext.username}
          </NavLink>
        )}
      </Navigation>
    )
}

export default NavigationSection