import React from 'react'
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Error404 from './pages/error404' 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App