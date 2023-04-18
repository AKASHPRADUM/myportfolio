import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='footer_logo'>
        <div className="mylogo">
          <div className='mylogo_bg'>- PD -</div>
          <div className='mylogo_Front'>Pradum.k.Dubey</div>
        </div>
      </a>

      <ul className="allLinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact ">Contact </a></li>
      </ul>
      <ul className="allLinks">
        <li><a href="https://projects.pradumdubey.in" className='btn1' target="_blank" rel="noreferrer">All Projects</a></li>
        <li><a href="https://certificates.pradumdubey.in" className='btn1' target="_blank" rel="noreferrer">All Certificates</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100004863979450" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/pradum_kymar_dubey/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.twitter.com/intent/tweet?screen_name=Pradum12613076" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">copyright</div>
    </footer>
  )
}

export default Footer;
