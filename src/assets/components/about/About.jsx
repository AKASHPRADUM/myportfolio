import React from 'react'
import './about.css'
import ME from '../../me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="about me img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ year working</small>
            </div>
            <div className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>30+ WorldWide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </div>
          </div>
          <p>I'm a <span className='focus'>Full-Stack Developer</span> with a passion for UX/UI development. I can code in <span className='focus'>HTML/CSS</span>, <span className='focus'>JavaScript</span>, and <span className='focus'>React.js</span>. I'm also a fresher and eager to learn. I'm looking for opportunities Where I can make use of my abilities and skills to grow and learn along with my Peers. </p>
          
        </div>
        
      </div>
      <div className="container data">
            <a href="#contact" className='btn btn-primary contactbtn'>Let's Talk</a>
            <div className="dataTable">
              <div className="row1">
                <span className="dataQuestion">Birthday : </span><span className="dataAnswer">&nbsp;11 May 2000</span> <br /> 
                <span className="dataQuestion">Website : </span><span className="dataAnswer">&nbsp;https://pradumdubey.in</span> <br /> 
                <span className="dataQuestion">Degree : </span><span className="dataAnswer">&nbsp;Computer Science</span> <br /> 
                <span className="dataQuestion">City : </span><span className="dataAnswer">&nbsp;Pune</span> <br />  
              </div>
              <div className="row2">
                <span className="dataQuestion">Age : </span><span className="dataAnswer">&nbsp;22</span> <br /> 
                <span className="dataQuestion">Email : </span><span className="dataAnswer">&nbsp;pradumkumardubey</span> <br /> 
                <span className="dataQuestion">Phone : </span><span className="dataAnswer">&nbsp;+91 8318661938</span> <br /> 
                <span className="dataQuestion">Freelance : </span><span className="dataAnswer">&nbsp;Available</span> <br /> 
              </div>
            </div>
          </div>
    </section>
  )
}

export default About
