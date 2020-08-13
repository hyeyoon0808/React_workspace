import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import BookItem from "./BookItem";

class BookList extends Component {
  render() {
    const { books, onSelect } = this.props;

    const bookList = books.map((book) => {
      return <BookItem key={book.ISBN} book={book} onSelect={onSelect} />;
    });
    return (
      <div>
        <Item.Group>{bookList}</Item.Group>
      </div>
    );
  }
}

export default BookList;
