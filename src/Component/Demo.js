import React, { Component } from 'react';
import './style.css'; // Import a separate CSS file for styling

class AgeCalculator extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: '',
      age: null,
    };
  }

  calculateAge = () => {
    const birthDate = new Date(this.state.birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31536000000); // 1 year = 31536000000 milliseconds

    this.setState({ age: ageInYears });
  }

  handleDateChange = (event) => {
    this.setState({ birthDate: event.target.value });
  }

  render() {
    return (
      <div>
        <div className='lahari'><h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input
          type="date"
          onChange={this.handleDateChange}
          value={this.state.birthDate}
        />
        <br/>
        <br/>

        <button
          className="calculate-button"
          onClick={this.calculateAge}
        >
          Calculate Age
        </button>
        <br/>
        <br/>
        {this.state.age && <p>You are {this.state.age} years old.</p>}</div>
      </div>
    );
  }
}

export default AgeCalculator;
