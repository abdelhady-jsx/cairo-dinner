import React, { useEffect, useReducer, useContext } from 'react'

// Context

import AuthContext from '../Context/AuthContext'

// UI

import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { Col } from '../UI/Container/Container'

// Default State

const DEFAULT_FORM_STATE = {
    usernameValue: '',
    isUsernameValid: false,
    passwordValue: '',
    isPasswordValid: false,
    isFormValid: false,
}

// Actions

const UPDATE_FORM_USERNAME = 'UPDATE_FORM_USERNAME'
const UPDATE_FORM_PASSWORD = 'UPDATE_FORM_PASSWORD'
const UPDATE_FORM_VALID = 'UPDATE_FORM_VALID'

const updateFormUsernameAction = (usernameValue, isUsernameValid) => {
    return {
        type: UPDATE_FORM_USERNAME,
        payload: {
            usernameValue,
            isUsernameValid,
        }
    }
}

const updateFormPasswordAction = (passwordValue, isPasswordValid) => {
    return {
        type: UPDATE_FORM_PASSWORD,
        payload: {
            passwordValue,
            isPasswordValid,
        }
    }
}

const updateFormValidAction = (isFormValid) => {
    return {
        type: UPDATE_FORM_VALID,
        payload: {
            isFormValid,
        }
    }
}

// Reducers

const formReducer = (state = DEFAULT_FORM_STATE, action) => {
    switch (action.type) {
        case UPDATE_FORM_USERNAME: return {
            ...state,
            usernameValue: action.payload.usernameValue,
            isUsernameValid: action.payload.isUsernameValid,
        }
        case UPDATE_FORM_PASSWORD: return {
            ...state,
            passwordValue: action.payload.passwordValue,
            isPasswordValid: action.payload.isPasswordValid,
        }
        case UPDATE_FORM_VALID: return {
            ...state,
            isFormValid: action.payload.isFormValid,
        }
        default: return state
    }
}

// Validators

const validateUsername = (username) => (typeof username === 'string' && username.trim().length >= 3 && username.trim().length <= 24)

const validatePassword = (password) => (typeof password === 'string' && password.trim().length >= 8 && password.length <= 60)

// Component

const LoginSection = () => {
    const authContext = useContext(AuthContext)
    const [ formState, dispatchFormState ] = useReducer(formReducer, DEFAULT_FORM_STATE)
    useEffect(() => {
        const validateTimer = setTimeout(() => {
            dispatchFormState(updateFormValidAction(formState.isUsernameValid && formState.isPasswordValid))
        }, 500)
        return () => {
            clearTimeout(validateTimer)
        }
    }, [ formState.isUsernameValid, formState.isPasswordValid ])
    const handleSubmit = (e) => {
        e.preventDefault()
        formState.isFormValid ? authContext.loginUser(formState.usernameValue) : alert('Login failed')
    }
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'username': return dispatchFormState(updateFormUsernameAction(e.target.value, validateUsername(e.target.value)))
            case 'password': return dispatchFormState(updateFormPasswordAction(e.target.value, validatePassword(e.target.value)))
            default: return
        }
    }
    return (
        <>
            <Form title={'Please login to continue'} desc={'Type your username and password below to finish logging in.'} onSubmit={handleSubmit}>
                <Col>
                    <Input id={'usernameInput'} name={'username'} type={'text'} value={formState.usernameValue} placeholder={'Type your username here'} onChange={handleChange} label={'Username'}  invalid={!formState.isUsernameValid} minLen={3} maxLen={24} />
                    <Input id={'passwordInput'} name={'password'} type={'password'} value={formState.passwordValue} placeholder={'Type your password here'} onChange={handleChange} label={'Password'}  invalid={!formState.isPasswordValid} minLen={8} maxLen={60} />
                    <Button type={'submit'} text={'Login'} disabled={!formState.isFormValid} />
                </Col>
            </Form>
        </>
    )
}

export default LoginSection