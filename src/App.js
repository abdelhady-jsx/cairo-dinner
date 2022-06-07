import React, { useEffect, useReducer } from 'react'
import Cookies from 'js-cookie'

// UI
import Container, { ContainerFluid, Row } from './UI/Container/Container'

// Sections
import NavigationSection from './Sections/NavigationSection'
import HeroSection from './Sections/HeroSection'
import LoginSection from './Sections/LoginSection'

// Context
import AuthContext from './Context/AuthContext'

// Default auth state
const DEFAULT_AUTH_USER = {
  loggedIn: false,
  username: '',
}

// Actions
const ACTION_LOGIN_USER = 'ACTION_LOGIN_USER'
const ACTION_LOGOUT_USER = 'ACTION_LOGOUT_USER'

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

function App() {
  const [ authUser, dispatchAuthUser ] = useReducer(authUserReducer, DEFAULT_AUTH_USER)
  const loginUser = (username) => {
    Cookies.set('loggedIn', 'true')
    Cookies.set('username', username)
    dispatchAuthUser(loginUserAction(username))
  }
  const logoutUser = () => {
    Cookies.remove('loggedIn')
    Cookies.remove('username')
    dispatchAuthUser(logoutUserAction())
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
    <AuthContext.Provider value={{ loggedIn: authUser.loggedIn, username: authUser.username, loginUser, logoutUser }}>
      <ContainerFluid>
        <NavigationSection />
        <Container>
          <Row>
            <HeroSection headerText={'Welcome to Cairo Dinner!'}>
              <p>Order your food online. Shipping anywhere in Cairo.</p>
              <p>Enjoy delicious traditional Egyptian food.</p>
              <p>Shipping Meat, Fruit, Vegetables, Dairy Products, Desserts, & more!</p>
            </HeroSection>
          </Row>
          <Row>
            {!authUser.loggedIn && (<LoginSection />)}
          </Row>
        </Container>
      </ContainerFluid>
    </AuthContext.Provider>
  );
}

export default App;
