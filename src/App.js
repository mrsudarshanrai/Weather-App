import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Search from './components/Search/Search';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="main-container">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/weather/:city" component={Search} />
          </Switch>
        </div>
        <div className="copy">
          <span>powered by <a href="https://openweathermap.org/" target="_blank">openweathermap.org</a></span>
        </div>
      </div>
    </Router>

  );
}

export default App;
