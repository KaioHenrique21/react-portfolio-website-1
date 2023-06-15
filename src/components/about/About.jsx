import React from "react";
import "./about.css";
import ME from '../../assets/meabout.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons//fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            With extensive experience in the computing area, I have worked in
            different functions, including support auction technician, robotics
            monitor and microcomputer maintenance. I also acted as React
            developer and participated in several projects at my former company,
            acquiring valuable knowledge along the way. My approach to work is
            always focused on learning and grow continuously. I am highly
            dedicated and always strive to find innovative solutions. for the
            challenges I face. I am always open to new opportunities to apply my
            experience. and skills in new contexts, and I'm excited to explore
            new challenges in the future.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
