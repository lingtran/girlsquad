const React = require('react');
const ReactDOM = require('react-dom');

require('../css/main.css');

// navbar
var Nav = React.createClass({
  
})

// welcome
var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        Hello, world!
      </div>
    )
  }
});

// login button

// sign up button

ReactDOM.render(<Welcome />, document.getElementById("application"));
