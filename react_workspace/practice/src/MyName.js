/*
import React, { Component } from "react";

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}
*/
import React from "react";

const MyName = ({ name, children }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 이고 children은 {children}
    </div>
  );
};

MyName.defaultProps = {
  name: "기본이름",
};

export default MyName;
