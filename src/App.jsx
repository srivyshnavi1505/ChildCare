import React, { useState } from 'react'
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Error404 from './pages/error404' 
import Homepage from './pages/homepage'
import Activities from './pages/activities'
import Programmes from './pages/programmes'
import Signup from './pages/signup'
import Children from './pages/children'
import Child from './pages/child'

const App = () => {

  const [loggedin,setloggedin]=useState(false);

  return (
    <div>
      <Navbar loggedin={loggedin} setloggedin={setloggedin} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/programmes' element={<Programmes />} />
        <Route path='/login' element={<Login loggedin={loggedin} setloggedin={setloggedin} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/children' element={<Children />} />
        <Route path='/children/:id' element={<Child />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App