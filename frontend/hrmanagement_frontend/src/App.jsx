import { useState } from 'react'

import './App.css'
import Header_app from './components/Header_app'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes,Route}from 'react-router-dom'
import AdminLogin from './pages/adminlogin'
import AdminHome from './pages/AdminHome'

function App() {
  return(
    <div>
  
<Header_app />
 <Routes>
  <Route path="/" element={<Home></Home>}></Route>
<Route path="/About" element={<About></About>}></Route>
<Route path="/Contact" element={<Contact></Contact>}></Route>
<Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>

  
 </Routes>
  
        <Footer />

       
     
  </div>
  )
}

export default App