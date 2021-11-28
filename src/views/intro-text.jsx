import React from 'react';

class IntroText extends React.Component {
  render() {
    return (
      <div className="intro-text"> 
        <h1 className="primary-heading">
          <span className="introduction-main">Robert Bridges</span>
          <span className="introduction-sub">Full Stack Developer</span>
          
        </h1>
        <div className ="intro-links">
          <span className="intro-button"><a className="btn github-button button-animation" target="_blank" rel="noreferrer" href="https://github.com/robbridges">Github</a></span>
          <span className="intro-button"><a className="btn linkedin-button button-animation" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rob-bridges-8491ba166/">LinkedIn</a></span>
        </div>
        
      </div>
    )
  }
}

export default IntroText;