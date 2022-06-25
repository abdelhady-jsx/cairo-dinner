import React, { useEffect, useReducer, useState } from 'react'
import Cookies from 'js-cookie'
import Alert from './Alert'

// UI
import Container, { ContainerFluid, Row, Col, RotatedTexture, NormalTexture } from './UI/Container/Container'

// Sections
import NavigationSection from './Sections/NavigationSection'
import HeroSection from './Sections/HeroSection'
import LoginSection from './Sections/LoginSection'
import RegistrationSection from './Sections/RegistrationSection'
import ProductsList from './Sections/ProductsList'

// Context
import AuthContext from './Context/AuthContext'
import FoodContext from './Context/FoodContext'
import CartContext from './Context/CartContext'

// Images
import Falafel from './Images/taameya-egyptian-falafel.jpg'
import Kushari from './Images/kushari-egyptian-food.jpg'
import Mulukhiyah from './Images/mulukhiyah-egyptian-food.jpg'
import Moussaka from './Images/moussaka.jpg'
import Kabab from './Images/kabab.jpg'
import Fattah from './Images/fattah.jpg'
import Hawawshi from './Images/hawawshi.jpg'

// Default auth state
const DEFAULT_AUTH_USER = {
	loggedIn: false,
	username: '',
}

// Default alert state
const DEFAULT_ALERT_STATE = {
	showAlert: false,
	title: '',
	text: '',
}

// Actions
const ACTION_LOGIN_USER = 'ACTION_LOGIN_USER'
const ACTION_LOGOUT_USER = 'ACTION_LOGOUT_USER'
const ACTION_SHOW_ALERT = 'ACTION_SHOW_ALERT'

const loginUserAction = (username) => {
	return {
		type: ACTION_LOGIN_USER,
		payload: {
			username,
		}
	}
}

const logoutUserAction = () => {
	return {
		type: ACTION_LOGOUT_USER,
	}
}

const showAlertAction = (showAlert, title, text) => {
	return {
		type: ACTION_SHOW_ALERT,
		payload: {
			showAlert,
			title,
			text,
		}
	}
}

// Reducers
const authUserReducer = (state = DEFAULT_AUTH_USER, action) => {
	switch (action.type) {
		case ACTION_LOGIN_USER: return {
			loggedIn: true,
			username: action.payload.username,
		}
		case ACTION_LOGOUT_USER: return {
			loggedIn: false,
			username: '',
		}
		default: return state
	}
}

const alertStateReducer = (state = DEFAULT_ALERT_STATE, action) => {
	switch (action.type) {
		case ACTION_SHOW_ALERT: return {
			showAlert: action.payload.showAlert,
			title: action.payload.title || '',
			text: action.payload.text || '',
		}
		default: return state
	}
}

// User List
let users = [
	{
		username: 'hady',
		password: '12345678',
	},
	{
		username: 'john',
		password: '87654321',
	},
]

// Food List
const food = [
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: `Ful Medames & Ta'ameya`,
		image: Falafel,
		price: 15
	},
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: 'Kushari',
		image: Kushari,
		price: 20
	},
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: 'Mulukhiyah',
		image: Mulukhiyah,
		price: 50
	},
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: 'Moussaka',
		image: Moussaka,
		price: 75
	},
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: 'Shish Kabab & Kofta',
		image: Kabab,
		price: 125
	},
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: 'Fattah',
		image: Fattah,
		price: 150
	},
	{
		id: `#${Math.floor(Math.random() * 1000) + 1000}`,
		name: 'Hawawshi',
		image: Hawawshi,
		price: 75
	},
]

function App() {
	const [authUser, dispatchAuthUser] = useReducer(authUserReducer, DEFAULT_AUTH_USER)
	const [alertUserState, dispatchAlertUser] = useReducer(alertStateReducer, DEFAULT_ALERT_STATE)
	const [userCart, updateUserCart] = useState({})
	const alertUser = (showAlert = DEFAULT_ALERT_STATE.showAlert, title = DEFAULT_ALERT_STATE.title, text = DEFAULT_ALERT_STATE.text) => {
		return dispatchAlertUser(showAlertAction(showAlert, title, text))
	}
	const loginUser = (username, password) => {
		const userMatch = users.filter((user) => user.username === username && user.password === password).length
		if (userMatch !== 1) throw new Error('User not found')
		Cookies.set('loggedIn', 'true')
		Cookies.set('username', username)
		dispatchAuthUser(loginUserAction(username))
	}
	const registerUser = (username, password) => {
		const userExists = users.filter((user) => user.username === username).length
		if (userExists > 0) throw new Error('User already exists')
		Cookies.set('loggedIn', 'true')
		Cookies.set('username', username)
		const newUserData = {
			username,
			password,
		}
		users.push(newUserData)
		dispatchAuthUser(loginUserAction(username))
	}
	const logoutUser = () => {
		Cookies.remove('loggedIn')
		Cookies.remove('username')
		dispatchAuthUser(logoutUserAction())
	}
	const addToCart = (id, quantity) => {
		if (!food.filter((recipe) => recipe.id === id).length) throw new Error('Invalid product ID')
		if (+quantity > 0 && (+userCart[id] + +quantity) > 10) throw new Error('Invalid quantity - you can\'t add more than 10 items of the same recipe.')
		if (+quantity < 0 && (+userCart[id] + +quantity) < 0) throw new Error('Invalid quantity - you can\'t add negative values to the cart.')
		if (+quantity === 0) throw new Error('Empty quantity')
		if (+userCart[id] + +quantity === 0) return updateUserCart((prevUserCart) => {
			const clone = Object.assign({}, prevUserCart)
			delete clone[id]
			return clone
		})
		updateUserCart((prevUserCart) => {
			const prevQuantity = +prevUserCart[id] || 0
			return {
				...prevUserCart,
				[id]: prevQuantity + +quantity,
			}
		})
	}
	useEffect(() => {
		let loginTimer
		if (Cookies.get('loggedIn') === 'true' && Cookies.get('username')) {
			loginTimer = setTimeout(() => {
				dispatchAuthUser(loginUserAction(Cookies.get('username')))
			}, 500)
		}
		return () => {
			clearTimeout(loginTimer)
		}
	}, [])
	return (
		<AuthContext.Provider value={{ loggedIn: authUser.loggedIn, username: authUser.username, loginUser, logoutUser, registerUser }}>
			<FoodContext.Provider value={{ food, }}>
				<CartContext.Provider value={{ cart: userCart, addToCart }}>
					<Alert showAlert={alertUserState.showAlert} title={alertUserState.title} text={alertUserState.text} alertUser={alertUser} />
					<ContainerFluid style={{ minHeight: '100vh' }}>
						<RotatedTexture style={{ top: !authUser.loggedIn ? '40vh' : '', transform: !authUser.loggedIn ? 'rotate(0deg)' : '' }} />
						<NormalTexture style={{ top: !authUser.loggedIn ? '38vh' : '' }} />
						<NavigationSection />
						<Container>
							<Row>
								{authUser.loggedIn && (<>
									<HeroSection />
									<ProductsList alertUser={alertUser} />
								</>)}
							</Row>
							<Row>
								<Col type='half'>
									{!authUser.loggedIn && (<LoginSection alertUser={alertUser} />)}
								</Col>
								<Col type='half'>
									{!authUser.loggedIn && (<RegistrationSection alertUser={alertUser} />)}
								</Col>
							</Row>
						</Container>
					</ContainerFluid>
				</CartContext.Provider>
			</FoodContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
