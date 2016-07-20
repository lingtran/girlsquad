const React = require('react');
const ReactDOM = require('react-dom');

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
          <ActionButton id="login-button" text="Login" onAction={console.log("login") }/>
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
      </div>
    );
  }
}


ReactDOM.render(<UserHome />, document.getElementById('application'));
ReactDOM.render((
  <Router>
    <Route path="/" component={ Welcome }>
    // </Route>
    <Route path="/home" component={ UserHome }>
    </Route>
  </Router>
  ),document.getElementById('Root'));
