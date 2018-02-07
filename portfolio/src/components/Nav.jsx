import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
return (
  <div>

      <nav className="navbarReduce navbar fixed-top  navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav container col-md ml-auto">
          <NavLink className="navbar-brand" to="/">
            <div className="d-inline-block align-top crestBug">
            </div>
           <span className= "author"> Caden Chen </span>
          </NavLink>
        </div>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-expand-lg" id="navbarNav">
          <div className="navbar-nav container col-md-7 ml-auto">
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="Projects">Projects</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="Experience">Experience</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" to="About">About Me</NavLink>
          </div>
            <div className="navbar-nav  col-md ml-auto ">

            </div>
        </div>

      </nav>
    </div>
  );
};

export default Nav;
