import React from 'react';
import "../App.css";
import profile from "../images/profile.jpeg"


const Home = (props) => {
  return (
    <div className="home">
      <div><br/>
      <h1 className="title">Caden Chen</h1>
      <h2 className="title">Full Stack Developer</h2><br/>
      </div>
      <div>
        <img src={profile} className="profile" />
      </div>

    </div>
  );
};

export default Home;

