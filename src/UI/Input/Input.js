import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import classes from './Input.module.css'

const Input = ({ id, label, name, type, value, placeholder, invalid, onChange, onBlur, minLen, maxLen }, ref) => {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
        return {
            focus: inputRef.current.focus(),
        }
    })
    return (
        <>
            {label && (
                <label className={classes.label} htmlFor={id}>{label}</label>
            )}
            <input id={id} name={name} type={type} value={value} placeholder={placeholder} className={`${classes.input} ${invalid && classes.invalid}`} ref={inputRef} onChange={onChange} onBlur={onBlur} minLength={minLen} maxLength={maxLen} />
        </>
    )
}

export default forwardRef(Input)