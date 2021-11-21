import React from 'react';

class IntroText extends React.Component {
  render() {
    return (
      <div className="intro-text"> 
        <h1 className="primary-heading">
          <span className="introduction-main">Robert Bridges</span>
          <span className="introduction-sub">Full Stack Developer</span>
        </h1>
        <a className="btn github-button button-animation" target="_blank" rel="noreferrer" href="https://github.com/robbridges">Github</a>
      </div>
    )
  }
}

export default IntroText;