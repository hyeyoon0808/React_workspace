// import React, { Component } from "react";
// // import TodoTemplate from "./component/TodoTemplate";
// // import TodoInsert from "./component/TodoInsert";
// // import TodoList from "./component/TodoList";
// import TodoEditFromView from "./component/TodoEditFormView";
// import TodoListView from "./component/TodoListView";

// import IDGenerator from "./IDGenerator";

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: "리액트의 기초 알아보기",
//       checked: true,
//     },
//     {
//       id: 2,
//       text: "컴포넌트 스타일링 해보기",
//       checked: true,
//     },
//     {
//       id: 3,
//       text: "일정관리 앱만들어 보기",
//       checked: false,
//     },
//   ]);

//고윳값으로 사용될 id
//ref를 사용하여 변수 담기
// const nextId = useRef(4);

// const onInsert = useCallback(
//   (text) => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false,
//     };
//     setTodos(todos.concat(todo));
//     nextId.current += 1; //nextId 1씩 더하기
//   },
//   [todos],
// );

// const onRemove = useCallback(
//   (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   },
//   [todos],
// );
// const onToggle = useCallback(
//   (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//       ),
//     );
//   },
//   [todos],
//   // );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       title: "",
//       date: new Date(),
//     };

//     this.onSetTodoProp = this.onSetTodoProp.bind(this);
//     this.onAddTodo = this.onAddTodo(this);
//   }
//   onSetTodoProp(title, value) {
//     if (title === "title") {
//       this.setState({ title: value });
//     } else if (title === "date") {
//       this.setState({ date: new Date(value) });
//     }
//   }

//   onAddTodo() {
//     const todo = {
//       id: IDGenerator(1),
//       title: this.state.title,
//       date: this.state.date,
//     };
//     //[]
//     // [todo,todo,todo]
//     this.setState({ todos: this.state.todos.concat(todo) });
//   }

//   render() {
//     const todo = {
//       title: this.state.title,
//       date: this.state.date,
//     };
//     return (
//       <div className="TodoTemplate">
//         <div className="TodoTitle">일정관리 앱</div>

//         <TodoEditFromView
//           todo={todo}
//           onSetTodoProp={this.onSetTodoProp}
//           onAddTodo={this.onAddTodo}
//         />
//         <TodoListView todos={this.state.todos} />
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";
import TodoEditFormView from "./component/TodoEditFormView";
import TodoListView from "./component/TodoListView";
import IDGenerator from "./IDGenerator";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: "",
      date: new Date(),
    };

    this.onSetTodoProp = this.onSetTodoProp.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onSetTodoProp(title, value) {
    if (title === "title") {
      this.setState({ title: value });
    } else if (title === "date") {
      this.setState({ date: new Date(value) });
    }
  }
  onAddTodo() {
    const todo = {
      id: IDGenerator(1),
      title: this.state.title,
      date: this.state.date,
    };
    // []
    // [todo,todo,todo,]
    this.setState({ todos: this.state.todos.concat(todo) });
  }

  render() {
    const todo = {
      title: this.state.title,
      date: this.state.date,
    };

    return (
      <div className="TodoTemplate">
        <div className="TodoTitle">일정 관리 앱</div>

        <TodoEditFormView
          todo={todo}
          onSetTodoProp={this.onSetTodoProp}
          onAddTodo={this.onAddTodo}
        />
        <TodoListView todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
