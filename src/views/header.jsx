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
            
          </div>
          
        </div>
        
      
    )
  }
}
export default Header;