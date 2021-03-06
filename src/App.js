
import './App.css';
import HeaderContainer from './views/header';
import IntroText from './views/intro-text';
import About from './views/About';
import Portfolio from './views/Portfolio';
import {HashRouter as Router, Route, Routes,} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer /> 
        
        <Routes>
          <Route path="/about" element= {<About />} />
          <Route path="/portfolio" element= {<Portfolio />} /> 
          <Route exact path="/" element= {<IntroText />} />
          
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
