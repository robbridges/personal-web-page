import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div className= "App-header">
          <div className = "left-side">
            <a className="header-link" href="https://google.com"> Rob Bridges</a>
            <a className="header-link" href="google.com">Recent work</a>
          </div>
        </div>
        
      
    )
  }
}
export default Header;