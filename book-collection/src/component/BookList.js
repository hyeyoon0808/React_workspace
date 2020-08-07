import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import BookItem from "./BookItem";

class BookList extends Component {
  render() {
    const bookList = this.props.books.map((book) => {
      return <BookItem book={book} onSelect={this.props.onSelect} />;
    });
    return (
      <div>
        <Item.Group>{bookList}</Item.Group>
      </div>
    );
  }
}

export default BookList;
