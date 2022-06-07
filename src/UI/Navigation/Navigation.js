import classes from './Navigation.module.css'
import logo from '../../Images/cairo-dinner-logo-transparent-1000x1000.png'

export const NavLink = ({ children, linkTo, linkText }) => {
    return (
        <button className={classes.navLink}>
            {linkTo && (
                <a href={linkTo}>{linkText}</a>
            )}
            {!linkTo && (children)}
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
            <div className={classes.nav}>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Navigation