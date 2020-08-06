import React, { Component } from "react";

class Calculater extends Component {
  constructor(props) {
    super(props); //calling value from props(parent)
    this.state = {
      operator: "+",
      result: 0,
    };
  }
  render() {
    const { operator, result } = this.state;

    return (
      <div>
        <h1>
          20 {operator} 10 = {result}
        </h1>
        <button
          onClick={() => {
            this.setState({
              operator: "+",
              result: result + 10,
            });
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            this.setState({
              operator: "-",
              result: 20 - 10,
            });
          }}
        >
          SUBSTRACT
        </button>
        <button
          onClick={() => {
            this.setState({
              operator: "*",
              result: 20 * 10,
            });
          }}
        >
          MULTIPLY
        </button>
        <button
          onClick={() => {
            this.setState({
              operator: "/",
              result: 20 / 10,
            });
          }}
        >
          DIVISION
        </button>
      </div>
    );
  }
}

export default Calculater;
