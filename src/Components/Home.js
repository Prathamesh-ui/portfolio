import React from 'react'
import './Home.css'
import facebook from '../facebook.svg'
import insta from '../insta.svg'
import linkedin from '../linkedin.svg'
import twitter from '../twitter.svg'

export default function Home() {
    return (
        <>
        
            <div className="container">
                <div className="name">
                    Hi, <br /> I am <span>Alexa</span>
                </div>
                <div className='sub'>A Web Developer</div>
                <br />
                <div className="para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quas in modi repudiandae soluta quos veritatis quod, eos possimus at?
                </div>
            </div>
            <div className="logo">
                <img src={facebook} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
            </div>
        </>
    )
}
