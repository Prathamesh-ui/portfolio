import React from 'react'
import logo from '../images.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

  return (
    <>
      <nav className="navbar">
      <img src={logo} alt="" />
      <span>Welcome</span>
      <div className="list">
        <li><NavLink exact to="/" activeStyle={{color: "aqua", textDecorationLine: 'underline'}}>Home</NavLink></li>
        <li><NavLink exact to="/Contact" activeStyle={{color: "aqua", textDecorationLine:'underline'}}>Contact Me</NavLink></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/About">About</Link></li>        
      </div>
      </nav>
    </>
  )
}
