import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props); //부모생성자에게 넘겨준다
    //1. state 첫번째 단계 초기화
    this.state = {
      number: 0,
    };
  }

  render() {
    //2. state에 정의된 변수는 직접 데이터 할당할 수 없음
    //      -> this.setState()로 할당
    const { number } = this.state;
    //state를 조회할 때는 this.state로 조회.
    return (
      <div>
        <h1>Count : {number}</h1>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          increase
        </button>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          decrease
        </button>
      </div>
    );
  }
}

export default Counter;
