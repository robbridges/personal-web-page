
import './App.css';
import HeaderContainer from './views/header';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <HeaderContainer /> 
      </div>
      
      <div className="intro-text"> 
        <h1 className="primary-heading">
          <span className="introduction-main">Robert Bridges</span>
          <span className="introduction-sub">Full Stack Developer</span>
        </h1>
      </div>
        
      
    </div>
  );
}

export default App;
