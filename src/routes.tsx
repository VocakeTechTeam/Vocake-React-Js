import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout'

const Home = () => {
  return <div>Home</div>
}

const Routes_ = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Routes_
