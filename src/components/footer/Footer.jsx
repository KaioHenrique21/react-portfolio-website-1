import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#none" className="footer__logo">
        Kaio Oliveira
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/KaioHenrique21">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kaio-henrique-2378b51a2/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/kaiooliveira97/">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kaio Oliveira. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
