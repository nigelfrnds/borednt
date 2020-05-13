import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Phrase from './components/Phrase';
import Layout from './components/Layout';
import ResultsPage from './pages/ResultsPage';
const WHAT_ROUTES = [
  "/what/movies", "/what/tv-shows", "/what/videos",
  "/what/drinks", "/what/games", "/what/music"
];

function App() {
  return (
    <Layout>
      <Router>
          <Route path="/" exact component={Phrase}/>
          <Route path={WHAT_ROUTES} component={ResultsPage} />
          <Route path="/layout" component={Layout} />
          <a target = "_blank" href = "https://github.com/nigelfrnds/borednt" rel="noopener noreferrer">
            <i className="fab fa-github" id="github" />
          </a>
      </Router>
    </Layout>
  );
}

export default App;
