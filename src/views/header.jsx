import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <div className= "App-header">
          <div className = "left-side">
            <Link className="header-link" to="/"> Rob Bridges</Link>
            <Link className="header-link" to="/about">About</Link>
            <a className="header-link" href="https://robbridges.github.io/personal-web-page/">Recent work</a>
          </div>
        </div>
        
      
    )
  }
}
export default Header;