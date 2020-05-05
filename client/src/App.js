import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Phrase from './components/Phrase';
import './css/App.css';

import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Phrase}/>
          <Route path={["/what/movies", "/what/tv-shows", "/what/videos"]} component={ResultsPage} />
          <a target = "_blank" href = "https://github.com/nigelfrnds/borednt" rel="noopener noreferrer">
            <i className="fab fa-github" id = "github"></i>
          </a>
      </Router>
    </div>
  );
}

export default App;
