import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <div className= "App-header">
          <div className = "left-side">
            <Link className="header-link" to="/"> Rob Bridges</Link>
            <Link className="header-link" to="/about">About</Link>
            <Link className="header-link" to="/portfolio">Recent work</Link>
            <a className="header-link right" href="https://docs.google.com/document/d/1xo-gYGGLwH8vLAAibBQK-a-Ng2YB1we977ssFa7zceE/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </div>
          
        </div>
        
      
    )
  }
}
export default Header;