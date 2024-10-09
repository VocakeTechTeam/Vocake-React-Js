import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home</div>
  )
}

const Routes_ = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/home' element={<Home/>}/>
      
      </Route>
  </Routes>
  )
  ;
}

export default Routes_
