import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default App;
