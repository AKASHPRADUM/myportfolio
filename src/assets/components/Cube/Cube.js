import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import { IoLogoNodejs } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

class LogoCube extends React.Component {
  render() {
    return (
      <div>
        <center>
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube className="cube__face " size={300} index="front">
                <div className='side cube__face--front' ><IoLogoNodejs /></div>
                <div className='side cube__face--right'><AiFillHtml5 /></div>
                <div className='side cube__face--back'><IoLogoCss3 /></div>
                <div className='side cube__face--left'><TbBrandJavascript /></div>
                <div className='side cube__face--top'><DiMongodb /></div>
                <div className='side cube__face--bottom'><FaReact /></div>
            </Cube>
            </div>
        </center>
      </div>
    );
  }
}
export default LogoCube