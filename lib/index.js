const React = require('react');
const ReactDOM = require('react-dom');

require('../css/main.css');

// navbar


// welcome
var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        <div className="NavBar">
          GIRLSQUAD
        </div>
        <div className="Welcome">
          <ActionButton id="login-button" text="Login"/>
          <ActionButton id="signup-button" text="Sign up"/>
        </div>
      </div>
    )
  }
});

// buttons
var ActionButton = React.createClass({
  render: function(){
    return (
      <button className="ActionButton" onClick={this.props.onAction}>
        <span>{this.props.text}</span>
      </button>
    )
  }
});



ReactDOM.render(<Welcome />, document.getElementById("application"));
