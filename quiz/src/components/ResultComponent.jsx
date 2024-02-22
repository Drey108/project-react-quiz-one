import React, { Component } from 'react';
import '../App.css';

class CustomResultComponent extends Component {
  render() {
    return (
      <div className='custom-result'>
        <h2>Result</h2>
        <div className='custom-box'>
          <h1>Your Score is 20%</h1>
          <table>
            <tbody>
              <tr>
                <td>Total number of Questions</td>
                <td></td>
                {/* Repeat for other cells */}
                <td>15</td>
              </tr>
              <tr>
                <td>Number of Attempted Questions</td>
                <td></td>
                {/* Repeat for other cells */}
                <td>9</td>
              </tr>
              <tr>
                <td>Number of correct Answers</td>
                <td></td>
                {/* Repeat for other cells */}
                <td>3</td>
              </tr>
              <tr>
                <td>Number of Wrong Answers</td>
                <td></td>
                {/* Repeat for other cells */}
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='custom-output'>
          <button className='custom-output-button-1'>Play Again</button>
          <button className='custom-output-button-2'>Back to Home</button>
        </div>
      </div>
    );
  }
}

export default CustomResultComponent;
