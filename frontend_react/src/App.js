import React from 'react'

import { Header, About, Experience, Services, Portfolio, Testimonial, Contact, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    
    <div className='app'>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      {/* <Services/>
      <Portfolio/> */}
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App