import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useSelector(store => store.user)
  const location = useLocation()
  
  if(!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}