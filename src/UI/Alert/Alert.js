import classes from './Alert.module.css'

export const AlertWrapper = ({ children, onClick }) => {
    return (
        <div className={classes.alertWrapper} onClick={onClick}>
            {children}
        </div>
    )
}

export const AlertHeader = ({ children }) => {
    return (
        <div className={classes.alertHeader}>
            {children}
        </div>
    )
}

export const AlertBody = ({ children }) => {
    return (
        <div className={classes.alertBody}>
            {children}
        </div>
    )
}

const Alert = ({ children }) => {
    return (
        <div className={classes.alert}>
            {children}
        </div>
    )
}

export default Alert