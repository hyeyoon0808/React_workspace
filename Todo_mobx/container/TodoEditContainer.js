import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoEditFormView from "../view/TodoEditFormView";
import generateId from "../IDGenerator";
import "react-datepicker/dist/react-datepicker.css";

@inject("TodoStore")
@observer
class TodoEditContainer extends Component {
  onSetTodoProp = (name, value) => {
    //TodoStore의 setTodoProps(name, value) 호출
    //const { TodoStore } = this.props;
    this.props.TodoStore.setTodoProps(name, value);
  };

  onAddTodo = () => {
    //TodoStore의 addTodo(todo) 호출
    const { TodoStore } = this.props;
    let todo = TodoStore.gettodo;
    todo = { ...todo, id: generateId(5) };
    TodoStore.addTodo(todo);
  };

  onRemoveTodo = () => {
    const { TodoStore } = this.props;
    let todo = TodoStore.gettodo;
    TodoStore.removeTodo(todo.id);
  };

  onModifyTodo = () => {
    const { TodoStore } = this.props;
    let todo = TodoStore.gettodo;
    TodoStore.modifyTodo(todo);
  };

  //todo, onSetTodoProp, onAddTodo
  render() {
    const todo = this.props.TodoStore.gettodo; //TodoStore에 있는 todo 값
    //const todo = this.props.TodoStore; //TodoStore에 있는 TodoStore변수: todo->TodoStore
    return (
      <TodoEditFormView
        todo={todo}
        onSetTodoProp={this.onSetTodoProp}
        onAddTodo={this.onAddTodo}
        onRemoveTodo={this.onRemoveTodo}
        onModifyTodo={this.onModifyTodo}
      />
    );
  }
}

export default TodoEditContainer;
