import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    /*   var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  */
    this.state = {
      seconds: "",
      minutes: "",
      hours: "",
    };

    this.updateTime = this.updateTime.bind(this);
    this.startTimeTracker = this.startTimeTracker.bind(this);
  }

  componentDidMount() {
    this.updateTime();
    this.startTimeTracker();
  }

  startTimeTracker() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    var today = new Date(),
      /* time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); */
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.setState({ currentTime: time });
    this.setState({ seconds: today.getSeconds() });
    this.setState({ minutes: today.getMinutes() });
    this.setState({ hours: today.getHours() });
  }

  render() {
    return (
      <span className="digital-clock">
        <div>{this.state.hours}:</div>
        <div>
          {this.state.minutes < 10
            ? "0" + this.state.minutes
            : this.state.minutes}
          :
        </div>
        <div className="secs">
          {this.state.seconds < 10
            ? "0" + this.state.seconds
            : this.state.seconds}
        </div>
        {/* <div>{this.state.hours < 12 ? "AM" : "PM"}</div> */}
      </span>
    );
  }
}

export default App;
