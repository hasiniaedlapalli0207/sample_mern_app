import { useState } from 'react'
import './App.css'
import Header_app from './components/Header_app'
import footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  
  return (
    <div>
      <Header_app/>
      <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/About" element ={<About></About>}></Route>
        <Route path="/Contact" element ={<Contact></Contact>}></Route>

    

      </Routes>
      
    </div>



  )
}

export default App
