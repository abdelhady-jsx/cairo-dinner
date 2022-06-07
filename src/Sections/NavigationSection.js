import Navigation, { NavLink } from '../UI/Navigation/Navigation'

function NavigationSection() {
  return (
      <Navigation>
        <NavLink>Home</NavLink>
        <NavLink linkTo={'https://google.com'} linkText={'Order food'} />
        <NavLink>Contact Us</NavLink>
      </Navigation>
    )
}

export default NavigationSection