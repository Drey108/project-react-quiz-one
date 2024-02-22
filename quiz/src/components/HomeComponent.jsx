import React, { Component } from 'react';
import "../App.css";

class CustomComponent extends Component {
  render() {
    return (
      <body className="custom">
        <div className="custom-comp">
          <h1 id="customH1">Quiz App</h1>
          <button id="start">Start</button>
        </div>
      </body>
    );
  }
}

export default CustomComponent;
