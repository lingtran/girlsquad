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

// welcome
class Welcome extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div>
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
// var UserHome = React.createClass({
//   render: function(){
//     return (
//       < NavBar />
//       < Upcoming Events />
//       < UserTools />
//     )
//   }
// })


ReactDOM.render(<Welcome />, document.getElementById("application"));
