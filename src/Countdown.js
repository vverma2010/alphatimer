import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerTime: "mm",
      seconds: 0,
      timerStart: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime,
      seconds: this.state.seconds,
    });
    this.timeIterval = setInterval(() => {
      const newTime = this.state.seconds - 1;
      if (newTime >= 0) {
        this.setState({
          seconds: newTime,
        });
      } else {
        clearInterval(this.timeIterval);
        this.setState({ timerOn: false });
      }
    }, 1000);
    const seconds = this.state.seconds;
    const timerTime = this.state.timerTime;
    if (seconds === 0) {
      this.setState({
        timerTime: timerTime - 1,
        seconds: 59,
      });
    }
  };

  handleTimerChange = (event) => {
    this.setState({
      timerTime: event.target.value,
    });
  };
  render() {
    const { timerTime, timerOn, seconds } = this.state;
    return (
      <div>
        Countdown Timer
        <input
          onChange={this.handleTimerChange}
          type="number"
          placeholder="time in minutes"
          required
        />
        <div>
          <h1>
            {timerTime} : {seconds}
          </h1>
          <button onClick={this.handleClick}>Start</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
