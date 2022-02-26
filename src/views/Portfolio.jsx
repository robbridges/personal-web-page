import React from 'react';

class Portfolio extends React.Component {
  render() {
    // eslint-disable-next-line no-lone-blocks
    {/* Mock data, just to make sure it's working, this should be a for loop maybe just to show off make your own api?  */}
    return (
      
      <div className="Portfolio">
            <div>
              <a href="https://rob-bridges-code-editor.herokuapp.com/">
                <img className="Project-img" src="https://rob-bridges.s3.us-west-2.amazonaws.com/code_editor_s3.png" alt="project" />
              </a>
              <p className ="Project-description">Code editor</p> 
            </div>
            <div>
              <a href="https://secure-oasis-79344.herokuapp.com/">
                <img className="Project-img" src="https://rob-bridges.s3.us-west-2.amazonaws.com/Feedback-API.png" alt="project" />
              </a>
              <p className ="Project-description">Feedback API</p> 
            </div>
            <div>
              <a href="https://robbridges.github.io/Tech-degree-4/">
                <img className="Project-img" src="https://rob-bridges.s3.us-west-2.amazonaws.com/PHRASE_HUNTER_SCREENSHOT.png" alt="project" />
              </a>
              
              <p className ="Project-description">Phrase Hunter</p>
            </div>
      </div>

    )
  }
}
export default Portfolio