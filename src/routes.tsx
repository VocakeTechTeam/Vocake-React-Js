import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout'
import Home from './views/Home/Home'
import Login from './views/Login'
import Register from './views/Register'
const Routes_ = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Routes_
