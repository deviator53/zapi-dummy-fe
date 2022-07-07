import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ForgotPassword, Home, LoginPage, SingleApi, UserProfile, Categories, Category, CreateOrg, Signup, Settings, MyApiPage, Endpoint } from './pages'
import { Navbar } from './components'
import { theme } from './theme'
import { getApis } from './redux/features/api/apiSlice'
import { getWithExpiry } from './services/loginService'
import { login } from './redux/features/user/userSlice'
import ApiEndpoint from './pages/ApiEndpoint'
import { getSingleApis } from './redux/features/singleApi/singleApiSlice'

const useStyles = makeStyles({
  router_container: {
    width: `100%`,
    marginTop: '6rem',
  }
}) 

const App = () => {
  const [query, setQuery] = useState('')
  const classes = useStyles()
  const dispatch = useDispatch()

  const getUserFromLS = () => {
    const user = getWithExpiry('user')
    if(!user) return null
    dispatch(login(user))
  }

  useEffect(() => {
    dispatch(getApis())
    getUserFromLS()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    dispatch(getSingleApis())
  })

  return (
    <ThemeProvider theme={theme}>
      <Navbar query={query} setQuery={setQuery} />
      <div className={classes.router_container}>
        <Routes>
          {/* General Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          {/* API Pages */}
          <Route path='/api/:id' element={<SingleApi />} />
          <Route path='/api/categories' element={<Categories />} />
          <Route path='/api/categories/:id' element={<Category />} />
          <Route path='/api/api/new/:id' element={<MyApiPage />} />
          <Route path='/api/endpoint/new/:id' element={<ApiEndpoint />} />
          <Route path='/api/endpoints/:id' element={<Endpoint />} />

          {/* User Pages */}
          <Route path='/user/:id' element={<UserProfile />} />
          <Route path='/user/settings' element={<Settings />} />

          {/* Organization Pages */}
          <Route path='/orgs/:id' />
          <Route path='/orgs/create-new' element={<CreateOrg />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App