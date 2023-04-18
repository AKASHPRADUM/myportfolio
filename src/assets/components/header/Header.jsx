import React from 'react'
import './header.css'
import RES from './RES'
import HeaderSocial from './HeaderSocial'
import ME from '../../me.jpg'
import { Typewriter } from 'react-simple-typewriter'



const Header = () => {

  return (
    <header id='header'>
      <div className='logo1'>
        <div className="mylogo1">
          <div className='mylogo_back'>- PD -</div>
          <div className='mylogo_Fg'>Pradum.K.Dubey</div>
        </div>
      </div>
      <div className="container header-container">
        <div className='hello'>Hello, my name is <span className="name">Pradum Kumar Dubey</span></div>
        <div className='headerWritten'>
        <span className='sizeCheck'>I'm a </span>
        <span className="autoType" >
          <Typewriter
            words={['FullStack Developer', 'React Developer','UI/UX Developer']}
            loop
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
        </div>
        <div className="headerMe">I am a passionate developer who loves to code and create. I am always looking for new challenges and opportunities to learn.</div>
        <div className="download"><RES /></div>
        <HeaderSocial />
        
        <div className="myImg1">
          <img src={ME} alt="me" />
        </div>
        <a className='scrolldown' href="#contact">--&gt;SCROLL Down--&gt;</a>
      </div>
    </header>
  )
}

export default Header;
