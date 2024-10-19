import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout'
import Home from './views/Home/Home'
import Login from './views/Login'
const Routes_ = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Routes_
