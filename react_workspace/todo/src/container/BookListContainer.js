import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import BookListView from "../view/BookListView";

@inject("BookStore")
@observer
class BookListContainer extends Component {
  onSelectBooks = (book) => {
    const { BookStore } = this.props;
    BookStore.getHandleSeleckBook(book);
  };
  render() {
    const books = this.props.BookStore.getbooks;
    return <BookListView books={books} />;
  }
}
export default BookListContainer;
