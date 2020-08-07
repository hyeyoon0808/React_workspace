import React, { Component } from "react";

class Toggle extends Component {
  state = {
    message: "",
  };
  constructor(props) {
    super(props);
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      message: "",
    });
  };

  handleClick = (message) => {
    alert(this.state.message);
    this.setState({
      message: this.state.message,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="message"
          placeholder="Enter a message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Check</button>
        <button onClick={this.handleReset}>Delete</button>
      </div>
    );
  }
}

export default Toggle;
