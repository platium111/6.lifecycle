import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    console.log("Clock - constructor is called");
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("Clock - componentDidMount is called");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("Clock - componentWillUnmount is called");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("Clock - render method is called");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
