import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import BookDetailsView from "../view/BookDetailsView";

@inject("BookStore")
@observer
class BookDetailsContainer extends Component {
  render() {
    const { BookStore } = this.props;
    return <BookDetailsView book={BookStore.getbook} />;
  }
}
export default BookDetailsContainer;
