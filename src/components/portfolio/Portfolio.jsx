import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/DT-Money.png';
import IMG2 from "../../assets/GrupoAqui.png";
import IMG3 from "../../assets/IgniteFeed.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>DT-Money: API Consumption Study</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/KaioHenrique21/dt-money"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://github.com/KaioHenrique21"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>GrupoAqui website: made in HTML, CSS and JS</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.grupoaqui.com/" className="btn">
              Site
            </a>
            <a
              href="https://www.grupoaqui.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Ignite-Feed: Studying the fundamentals of ReactJS</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/KaioHenrique21" className="btn">
              GitHub
            </a>
            <a
              href="https://github.com/KaioHenrique21"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio