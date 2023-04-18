import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import LogoCube from '../Cube/Cube.js'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills do I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>HTML</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>CSS</h5>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>JavaScript</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>Bootstrap</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>React</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>

          </div>

        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>Node JS</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>MongoDB</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>PHP</h5>
                <small className='text-light'> Beginner</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>Python</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>MySQL</h5>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h5>Django</h5>
                <small className='text-light'> Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
      <div className="scene">
        <h5 className='spinText'>Spin Me</h5>
        <div className="cubeArea">
          < LogoCube />
        </div>
      </div>
    </section>
  )
}

export default Experience;
