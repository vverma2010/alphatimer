import React, { Component } from "react";
import "./App.css";
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerTime: "Minutes",
      seconds: "00",
      timerStart: 0,
    };
  }

  handleStart = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      seconds: this.state.seconds,
    });
    this.timeInterval = setInterval(() => {
      const seconds = this.state.seconds;
      const timerTime = this.state.timerTime;
      if (seconds === 0 && timerTime > 0) {
        this.setState({
          timerTime: timerTime - 1,
          seconds: 60,
        });
      }
      const newTime = this.state.seconds - 1;
      if (newTime >= 0) {
        this.setState({
          seconds: newTime,
        });
      } else {
        clearInterval(this.timeInterval);
        this.setState({ timerOn: false });
      }
    }, 1000);
  };

  handleTimerChange = (event) => {
    this.setState({
      timerTime: event.target.value,
      seconds: 0,
    });
  };

  handleStop = () => {
    clearInterval(this.timeInterval);
    this.setState({ timerOn: false });
  };

  handleReset = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: "00",
        seconds: "00",
      });
    }
  };
  render() {
    const { timerTime, timerStart, timerOn, seconds } = this.state;
    return (
      <div className="main">
        <h2>Countdown Timer</h2>
        <input
          onChange={this.handleTimerChange}
          type="number"
          placeholder="Enter time in minutes..."
          required
        />
        <div className="container">
          <h1>
            {timerTime} : {seconds}
          </h1>
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <button onClick={this.handleStart}>Start</button>
            )}
          {timerOn === true && <button onClick={this.handleStop}>Stop</button>}
          <button onClick={this.handleReset}>Reset</button>
          {timerOn === false &&
            timerStart !== 0 &&
            timerStart !== timerTime &&
            timerTime !== 0 && (
              <button onClick={this.handleStart}>Resume</button>
            )}
        </div>
      </div>
    );
  }
}

export default Countdown;
