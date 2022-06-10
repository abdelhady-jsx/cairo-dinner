import { createContext } from 'react'

const AuthContext = createContext({ loggedIn: false, username: '', loginUser: (username, password) => {}, logoutUser: () => {}, registerUser: (username, password) => {} })

export default AuthContext