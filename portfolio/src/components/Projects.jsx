import React from 'react';
import { Link} from 'react-router-dom';
import "../App.css"

const Projects = (props) => {
  return (
    <div className="project">
      <br/><br/><br/><br/>
      <h1 className='title'> Projects </h1>
      <div className='links '>
        <Link to="https://git.generalassemb.ly/hchen229/FashionTrends" className="iconNav" target="_blank">
          <div>
            Fashion Blog
          </div>
        </Link>
        <Link to="https://git.generalassemb.ly/hchen229/ProjectTravel" className="iconNav" target="_blank">
          <div>
            Travel Blog
          </div>
        </Link>
        <Link to="https://git.generalassemb.ly/hchen229/Project-1-Game" className="iconNav" target="_blank">
          <div>
            Fortune of Truth and Dare Game
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Projects;
