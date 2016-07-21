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
      <div className="grid">
        <NavBar />
        <div className="Welcome row">
          <Link to="/home"><ActionButton id="login-button" text="Login" className="col-5" /></Link>
          <ActionButton className="col-5" id="signup-button" text="Sign up" />
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
        <br/> <br/>
        <p> User home!</p>
        <Link to="/"><ActionButton id="test-button" text="test button" /></Link>
        {/*upcoming events component, to iterate through data-store of events*/}
        <div className="UpcomingEvents">
          <p> placeholder for upcoming events </p>
        </div>
        {/*userhome navigation*/}
        <div className="UserHomeNavigation row">
          <p> placeholder for navigation buttons </p>
          {/*four buttons, each to be an icon and hyperlinked to nested routes*/}
          <ActionButton id="messages-button" text="Messages" className="col-4" />
          <ActionButton id="friends-button" text="Friends" className="col-4" />
          <ActionButton id="explore-button" text="Explore" className="col-4" />
          <ActionButton id="settings-button" text="Settings" className="col-4" />
        </div>
      </div>
    );
  }
}

class UpcomingEvents extends React.Component {
  constructor() {
    super();
  }
}

{/*add nested routes within userhome as they are user-specific information*/}
ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={Welcome} />
    <Route path="/home" component={UserHome} />
  </Router>
),document.getElementById('application'));
