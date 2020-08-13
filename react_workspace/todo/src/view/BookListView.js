import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import BookItemContainer from "../container/BookItemContainer";
import BookItemView from "../view/BookItemView";

class BookListView extends Component {
  render() {
    const { books } = this.props;

    const bookList = books.map((book) => {
      return <BookItemView book={book} />;
    });
    return (
      <div>
        <Item.Group>{bookList}</Item.Group>
      </div>
    );
  }
}

export default BookListView;
