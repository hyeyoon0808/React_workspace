import { observable, computed, action } from "mobx";
import Books from "../Books";
class BookStore {
  //관리해야하는 state 객체 @observable 선언 및 초기화
  @observable books = Books;
  @observable book = Books[0];

  @computed
  get getbook() {
    return this.book ? { ...this.book } : {};
  }

  @computed
  get getbooks() {
    return this.books ? this.books.slice() : [];
  }

  @action
  getHandleSeleckBook = (book) => {
    this.book = book;
  };

  @action
  selectBook = (id) => {
    this.book = this.books.find((book) => book.id === id);
    //todos 에서 id가 같은 todo 객체를 리턴
  };
}

//객체를 생성해서 export 해준다.
export default new BookStore();
