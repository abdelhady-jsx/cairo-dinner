import classes from './Button.module.css'

const Button = ({ type, text, onClick, disabled, style }) => {
    return (
        <button style={style} className={classes.button} type={type} onClick={onClick} disabled={disabled}>{text}</button>
    )
}

export default Button