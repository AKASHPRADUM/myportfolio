import React from 'react'
import './portfolio.css'
import IMG1 from '../../portfolio1.jpg'
import IMG2 from '../../portfolio2.jpg'
import IMG3 from '../../portfolio3.jpg'
import IMG4 from '../../portfolio4.jpg'
import IMG5 from '../../portfolio5.png'
import IMG6 from '../../portfolio6.jpg'

const portfolioData = [
  {
    imgsrc: IMG1,
    imgalt: "Img 1",
    name: "Banking-System",
    link1: "https://github.com/AKASHPRADUM/Banking-System.git",
    link2: "https://banking-system-8u69.onrender.com"
  },
  {
    imgsrc: IMG2,
    imgalt: "Img 2",
    name: "House Sell Page",
    link1: "https://github.com/AKASHPRADUM/No.1-pratice-House-Sell-Page.git",
    link2: "https://akashpradum.github.io/No.1-pratice-House-Sell-Page/"
  },
  {
    imgsrc: IMG3,
    imgalt: "Img 3",
    name: "Analog and Digital Clock",
    link1: "https://github.com/AKASHPRADUM/Analog-and-Digital-Clock.git",
    link2: "https://akashpradum.github.io/Analog-and-Digital-Clock/"
  },
  {
    imgsrc: IMG4,
    imgalt: "Img 4",
    name: "Drum Kit",
    link1: "https://github.com/AKASHPRADUM/Drum-Kit.git",
    link2: "https://akashpradum.github.io/Drum-Kit/"
  },
  {
    imgsrc: IMG5,
    imgalt: "Img 5",
    name: "Survey Form",
    link1: "https://github.com/AKASHPRADUM/No.3-Servay-Form.git",
    link2: "https://akashpradum.github.io/No.3-Servay-Form/"
  },
  {
    imgsrc: IMG6,
    imgalt: "Img 6",
    name: "Style Confrence",
    link1: "https://github.com/AKASHPRADUM/Style-Confrance.git",
    link2: "https://akashpradum.github.io/Style-Confrance/"
  }
];
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {portfolioData.map((alldata) =>
          <article className='portfolio_item'>
            <div className="portfolio_item_image">
              <img src={alldata.imgsrc} alt={alldata.imgalt} />
            </div>
            <h3>{alldata.name}</h3>
            <div className="portfolio_item_link">
              <a href={alldata.link1} className='btn' target="_blank" rel="noreferrer">Github</a>
              <a href={alldata.link2} className='btn btn-primary' target="_blank" rel="noreferrer">live Demo</a>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio;
