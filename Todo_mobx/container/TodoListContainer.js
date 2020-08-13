import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoListView from "../view/TodoListView";

@inject("TodoStore")
@observer
class TodoListContainer extends Component {
  onSelectTodo = (id) => {
    const { TodoStore } = this.props;
    TodoStore.selectTodo(id);
  };
  render() {
    const todos = this.props.TodoStore.gettodos;
    return <TodoListView todos={todos} onSelectTodo={this.onSelectTodo} />;
  }
}
export default TodoListContainer;
