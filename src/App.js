import React, { Component } from 'react';
import history from './history'
import './App.css';
import NewNasa from './components/nasa.js'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
class App extends Component {

  

  render() {
    return (
      <Router history={history}>
      <div className="App" id="app">
      
        <main>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={NewNasa} />
            </Switch>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
