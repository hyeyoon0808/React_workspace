import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import BookItemView from "../view/BookItemView";
import BookListView from "../view/BookListView";

@inject("BookStore")
@observer
class BookItemContainer extends Component {
  onSelectBook = (book) => {
    const { BookStore } = this.props;
    BookStore.selectBook(book);
  };
  render() {
    const book = this.props.BookStore.getbook;
    return <BookItemView book={book} onSelect={this.onSelectBook} />;
  }
}
export default BookItemContainer;
