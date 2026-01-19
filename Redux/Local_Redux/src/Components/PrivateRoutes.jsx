import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {

  const { isAuth } = useSelector((state) => {
  console.log("🚀 ~ state:", state);

    return state.auths;

  })
  console.log("🚀 ~ isAuth:", isAuth);

  if (!isAuth) {
    return <Navigate to="/todologin" />
  }
  return children;
}