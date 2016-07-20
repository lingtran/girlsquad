const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router';

require('../css/main.css');

// navbar
class NavBar extends React.Component{
  render() {
    return (
      <div className="NavBar">
        GIRLSQUAD
      </div>
    );
  }
}

// welcome page to login
class Welcome extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="Welcome">
        <NavBar />
        <div className="Welcome">
          <Link to="/home"><ActionButton id="login-button" text="Login" /></Link>
          <ActionButton id="signup-button" text="Sign up" onAction={console.log("sign up")} />
        </div>
      </div>
    );
  }

};

// buttons
class ActionButton extends React.Component {
  render(){
    return (
      <button className="ActionButton" onClick={this.props.onAction}>
        <span>{this.props.text}</span>
      </button>
    );

  }
}

// homescreen
class UserHome extends React.Component {
  render(){
    return (
      <div className="UserHome">
      <NavBar />
      <p> User home!</p>
      <Link to="/"><ActionButton id="test-button" text="test button"  /></Link>
      </div>
    );
  }
}


ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={Welcome} />
    <Route path="/home" component={UserHome} />
  </Router>
),document.getElementById('application'));
