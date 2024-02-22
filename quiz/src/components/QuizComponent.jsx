import React, { Component } from 'react';
import '../App.css';

class CustomQuizComponent extends Component {
  render() {
    return (
      <div className='custom-question'>
        <h1 className='custom-que'>Question</h1>
        <h5>1 of 15</h5>
        <h3>Which is the only mammal that can jump?</h3>
        <div className='custom-options'>
          <button className='custom-opt-btn'>Dog</button>
          <button className='custom-opt-btn'>Elephant</button>
          <button className='custom-opt-btn'>Goat</button>
          <button className='custom-opt-btn'>Lion</button>
        </div>
        <div className='custom-sub'>
          <button className='custom-submit-1'>Previous</button>
          <button className='custom-submit-2'>Next</button>
          <button className='custom-submit-3'>Quit</button>
        </div>
      </div>
    );
  }
}

export default CustomQuizComponent;
