import React from 'react';
import "../App.css";
import FontAwesome from 'react-fontawesome';


const Footer = (props) => {

  return (
      <nav className="footer navbar fixed-bottom navbar-light bg-light">
        <div className="footer container navbar-text justify-content-center">
        <a href="mailto:caden_chn@hotmail.com" target="_blank">Email</a>
        <a href="https://www.linkedin.com/in/cadenchen" target="_blank">Linkedin</a>
        <a href="https://github.com/hchen229" target="_blank">Github</a>

        <p className= "col-md-8">caden_chn@hotmail.com</p>
        </div>
      </nav>
  );
};

export default Footer;

