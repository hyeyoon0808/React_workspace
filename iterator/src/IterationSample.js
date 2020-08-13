import React, { Component } from "react";

class IterationSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
      ],
      inputText: "",
      nextId: 5,
    };
  }
  onChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };
  onClick = () => {
    const { names, inputText, nextId } = this.state;
    this.setState({
      names: names.concat({
        id: nextId,
        text: inputText,
      }),
      inputText: "",
      nextId: this.nextId + 1,
    });
  };

  render() {
    const { names, inputText } = this.state;
    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
    return (
      <div>
        <input value={inputText} onChange={this.onChange} />
        <button onClick={this.onClick}>Add</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample;
