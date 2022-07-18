import React from 'react'
import './Portfolio.scss'

import { images } from '../../constants';

const Portfolio = () => {
  return (
    <section id='portfolio'>

    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src="https://raw.githubusercontent.com/irwing-moura/file-organizer/master/images/print2.png" alt="" />
        </div>
        <h3>File Organizer</h3>
        <small class="text-light">A J2SE system that helps you to organize your files in folders</small>
        <div className="portfolio__item-cta">
          <a href="https://github.com/irwing-moura/file-organizer" className='btn' target="_blank">Github</a>
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src="https://raw.githubusercontent.com/irwing-moura/shrtner/main/documenta%C3%A7%C3%A3o/main_page.png" alt="" />
        </div>
        <h3>Shrtner</h3>
        <small class="text-light" >A Spring Boot system that helps you to shorten your URL's</small>
        <div className="portfolio__item-cta">
          <a href="https://github.com/irwing-moura/shrtner" className='btn' target="_blank">Github</a>
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src="https://raw.githubusercontent.com/irwing-moura/todo/master/todo-demo.png" alt="" />
        </div>
        <h3>To do</h3>
        <small class="text-light">A To Do list builded with ReactJS, Spring Boot and MongoDB</small>
        <div className="portfolio__item-cta">
          <a href="https://github.com/irwing-moura/todo" className='btn' target="_blank">Github</a>
          {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
        </div>
      </article>

      {/* <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={images.portfolio4} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={images.portfolio5} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={images.portfolio6} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article> */}



    </div>
      
    </section>
  )
}

export default Portfolio