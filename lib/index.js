const React = require('react');
const ReactDOM = require('react-dom');

import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router';

import FontIcon from 'material-ui/FontIcon';

require('../css/main.css');

// navbar
class NavBar extends React.Component{
  render() {
    return (
      <nav className="NavBar">
        GIRLSQUAD
      </nav>
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
      <container className="UserHome">
        <NavBar />
        <br/> <br/>
        <p> User home!</p>
        <Link to="/"><ActionButton id="test-button" text="test button" /></Link>
        {/*upcoming events component, to iterate through data-store of events*/}
        <section className="UpcomingEvents">
          <p> placeholder for upcoming events </p>
        </section>
        {/*userhome navigation*/}
        <div className="UserHomeNavigation row">
          <p> placeholder for navigation buttons </p>
          {/*four buttons, each to be an icon and hyperlinked to nested routes; need to check if new event icon is okay*/}
          <i className="material-icons" id="message-button">message</i>
          <i className="material-icons" id="friends-button">people_outline</i>
          <i className="material-icons" id="explore-button">event</i>
          <i className="material-icons" id="settings-button">settings</i>
        </div>
      </container>
    );
  }
}

class UpcomingEvents extends React.Component {
  constructor() {
    super();
  }
}

{/*add nested routes within userhome as they are user-specific functionality - unless there are other thoughts? */}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Welcome} />
    <Route path="/home" component={UserHome} />
  </Router>
),document.getElementById('application'));
