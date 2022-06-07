import { createContext } from 'react'

const AuthContext = createContext({ loggedIn: false, username: '', loginUser: (username) => {}, logoutUser: () => {} })

export default AuthContext