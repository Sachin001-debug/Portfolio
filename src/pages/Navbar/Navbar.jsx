import React from 'react'
import './Navbar.css'
const Navbar = ({setShowForm}) => {

 
  return (
    <div className="nav-bar">
               <h1 className='fade-in'>Dev.js</h1>
               <div className="nav-links">
              
                <ul>
                    <li className='fade-in'><a href="#home" >Home </a></li>
                    <li className='fade-in'><a href="#projects" >Projects</a></li>
                    <li  className='fade-in'>About</li>
                   
                    <li className='fade-in'><a href="#contact">Contact </a></li>
                </ul>
               </div>

               <button className="hire-btn fade-in" onClick={()=>setShowForm(true)} >Hire Me!</button>
    </div>
  )
}

export default Navbar
