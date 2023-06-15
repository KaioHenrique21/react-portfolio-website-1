import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Computer Science</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rocketseat - ReactJS + NodeJS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Science Academy - Blockchain fundamentals</p>
            </li>
          </ul>
        </article>

        {/* END OF EDUCATION */}

        <article className="service">
          <div className="service__head">
            <h3>Activity</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interested</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Communicative</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team work</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proactive</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Leadership</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Assertiveness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Enthusiasm</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Relaxation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sociability</p>
            </li>
          </ul>
        </article>

        {/* END OF ACTIVITY */}

        <article className="service">
          <div className="service__head">
            <h3>Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>English - Intermediary</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ease With Systems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>System Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Object Oriented Programming</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Programming logic</p>
            </li>
          </ul>
        </article>

        {/* END OF SKILLS */}
      </div>
    </section>
  );
}

export default Services