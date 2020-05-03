import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Phrase from './components/Phrase';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Phrase}/>
      </Router>
    </div>
  );
}

export default App;
