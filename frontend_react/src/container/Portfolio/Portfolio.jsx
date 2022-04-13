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
          <img src={images.portfolio1} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={images.portfolio2} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={images.portfolio3} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className='portfolio__item'>
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
      </article>



    </div>
      
    </section>
  )
}

export default Portfolio