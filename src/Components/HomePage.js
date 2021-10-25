import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='home'>
            <Navbar/>
            <Home/>
        </div>
    )
}
