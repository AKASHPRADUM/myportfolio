import React from 'react'
import './services.css'
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service service_1'>
          <h3 className='service_head'>UI/UX Design</h3>
          <ul className="services_list">
            <li>
              <BsCheck className='service_check' />
              <p>Content strategy</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>User flow charts, diagrams</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Wireframes</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Brand and design system development</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Design technology consulting</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>User stories</p>
            </li>
          </ul>
        </article>
        <article className='service service_2'>
          <h3 className='service_head'>Web Development</h3>
          <ul className="services_list">
            <li>
              <BsCheck className='service_check' />
              <p>Full Stack Web Development using MERN Stack</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Ecommerce Application </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Custom Web Application </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Content Management Systems </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Quality Assurance & Testing</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Web Support and Maintenance</p>
            </li>
          </ul>
        </article>
        <article className='service service_3'>
          <h3 className='service_head'>Content Creation</h3>
          <ul className="services_list">
            <li>
              <BsCheck className='service_check' />
              <p>Update Blogs</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Website Pages</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Presentation/ case studies </p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Social media Graphics</p>
            </li>
            <li>
              <BsCheck className='service_check' />
              <p>Website short content</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services;
