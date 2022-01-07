import React from 'react';

class Portfolio extends React.Component {
  render() {
    {/* Mock data, just to make sure it's working, this should be a for loop */}
    return (
      
      <div className="Portfolio">
            <div>
              <a href="https://rob-bridges-code-editor.herokuapp.com/">
                <img className="Project-img" src="https://rob-bridges.s3.us-west-2.amazonaws.com/code_editor_s3.png" alt="project" />
              </a>
              <p className ="Project-description">Code editor</p> 
            </div>
            <div>
              <a href="https://rob-bridges-code-editor.herokuapp.com/">
                <img className="Project-img" src="https://rob-bridges.s3.us-west-2.amazonaws.com/code_editor_s3.png" alt="project" />
              </a>
              <p className ="Project-description">Code editor</p> 
            </div>
            <div>
              <img className="Project-img" src="https://rob-bridges.s3.us-west-2.amazonaws.com/code_editor_s3.png" alt="project" />
            </div>
        

        
      </div>

    )
  }
}
export default Portfolio