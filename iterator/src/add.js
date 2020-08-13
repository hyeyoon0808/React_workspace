import React, { useState } from "react";

class IterationSample extends useState {
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
  onAppend = () => {
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
  onRemove = (id) => {
    const { names } = this.state;
    const nextNames = names.filter((name) => name.id !== id);
    this.setState({
      names: nextNames,
    });
  };

  render() {
    const { names, inputText } = this.state;
    const namesList = names.map((name) => {
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        <button onClick={() => this.onRemove(name.id)}>Delete</button>
      </li>;
    });
    return (
      <div>
        <input value={inputText} onChange={this.onChange} />
        <button onClick={this.onAppend}>Add</button>

        <ul>{namesList}</ul>
      </div>
    );
  }
}

export default IterationSample;
