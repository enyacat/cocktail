import React from 'react'
import { Navigate } from 'react-router-dom'
//not used in this project
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user
  if (!user) {
    return <Navigate to='/login' />
  }
  return children
}
export default PrivateRoute
