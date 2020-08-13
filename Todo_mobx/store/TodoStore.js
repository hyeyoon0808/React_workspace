import { observable, computed, action } from "mobx";
class TodoStore {
  //관리해야하는 state 객체 @observable 선언 및 초기화
  @observable todos = [];
  @observable todo = {
    id: "",
    title: "",
    data: new Date(),
  };

  @computed
  get getid() {
    return this.id ? { ...this.id } : "";
  }
  //state 데이터를 리턴 - @computed 함수로 정의
  @computed
  get gettodo() {
    return this.todo ? { ...this.todo } : {};
  }

  @computed
  get gettodos() {
    return this.todos ? this.todos.slice() : [];
  }
  //state 데이터 변경 @action 함수 구현
  @action
  setTodoProps(name, value) {
    this.todo = {
      ...this.todo,
      [name]: value,
    };
  }
  @action
  // addTodo(){
  //   this.todos.concat({...this.todo,this.todo.id:generatedId(5)});
  // }
  addTodo(todo) {
    this.todos.push(todo);
  }

  @action
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== this.todo.id);
    this.todo = {};
    //todos 에 id인 todo 삭제
  }

  @action
  modifyTodo(todo) {
    this.todos = this.todos.map((todo) =>
      todo.id === this.todo.id ? this.todo : todo
    );
    this.todo = {};
  }

  @action
  selectTodo(id) {
    this.todo = this.todos.find((todo) => todo.id === id);
    //todos 에서 id가 같은 todo 객체를 리턴
  }
}

//객체를 생성해서 export 해준다.
export default new TodoStore();
