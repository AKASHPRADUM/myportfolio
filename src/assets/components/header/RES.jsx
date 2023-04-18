import React from 'react'
import CV from '../../PradumDubey_cv.pdf'
import './header.css'
const RES = () => {
  return (
    <div className='res'>
      <a href={CV} download className='btn'>Download</a>
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default RES
