import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      //computed property names문법
      //key부분에 []가 사용됨. name을 보고 구분하여 value뿌리기
    });
  };
  handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    //상태값을 onCreate를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    //상태 초기화
    this.setState({
      name: "",
      phone: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          //각 name에 해당되는 value로 바꿔주기
          name="name"
        />
        <input
          placeholder="phone-number"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default PhoneForm;
