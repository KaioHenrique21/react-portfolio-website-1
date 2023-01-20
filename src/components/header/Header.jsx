import React from "react";
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/foto-2.0.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kaio Oliveira</h1>
        <h5 className="text-light">Front-End Developer Junior</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll___down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
