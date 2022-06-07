import classes from './Button.module.css'

const Button = ({ type, text, onClick, disabled }) => {
    return (
        <button className={classes.button} type={type} onClick={onClick} disabled={disabled}>{text}</button>
    )
}

export default Button