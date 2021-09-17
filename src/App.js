import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:title" component={Details} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
