import classes from './Navigation.module.css'
import logo from '../../Images/cairo-dinner-logo-transparent-1000x1000.png'

export const NavLink = ({ children, linkTo, linkText, onClick }) => {
    if (linkTo) return (
        <a href={linkTo}>
            <button className={classes.navLink} onClick={onClick}>{linkText}</button>
        </a>
    )
    else return (
        <button className={classes.navLink} onClick={onClick}>
            {children}
        </button>
    )
}

const Navigation = ({ children }) => {
    return (
    <div className={classes.navigationWrapper}>
        <div className={classes.navigation}>
            <div className={classes.logo}>
                <img src={logo} alt={'Cairo Dinner Logo'} />
            </div>
            <div className={classes.navLinks}>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Navigation