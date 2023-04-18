// eslint-disable-next-line
import React from 'react'
import About from './about/About'
import Contact from './contact/Contact'
import Header from './header/Header'
import ScrollButton from './scroll/Scroll'
import Nav from './nav/Nav'
import Experience from './experience/Experience'
import Services from './services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './testimonials/Testimonials'
import Footer from './footer/Footer'
import '../css/index.css'
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import CSSProperties from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "rgba(27, 9, 231, 1)",
  top: "15rem",
  left: "-9rem"
};

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="loaderApp">
      {
        loading ?
          <PacmanLoader color={'rgba(27, 9, 231, 1)'} loading={loading} cssOverride={override} size={70} />
          :
          <>
            <Header />
            <ScrollButton />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </>
      }
    </div>
  )
}

export default App
