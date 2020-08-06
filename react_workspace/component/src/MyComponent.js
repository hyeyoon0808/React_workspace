import React, { Component } from "react";
import propsTypes from "prop-types";
//1.create file ->2.class rendering 코드 작성-> 3.export

class MyComponent extends Component {
  static defaultProps = {
    major: "클라우드",
  };
  //props type과 데이터 생략여부 등 check
  static propsTypes = {
    name: propsTypes.string.isRequired,
    major: propsTypes.string,
  };
  render() {
    const { name, major } = this.props;
    return (
      <div>
        <h1>hello,</h1>
        <h2>my name is {name}</h2>
        <h2>my major is {major}</h2>
      </div>
    );
  }
}

export default MyComponent;
