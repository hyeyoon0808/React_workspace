import React, { Component } from "react";
import { Item } from "semantic-ui-react";

class BookItem extends Component {
  render() {
    const { key, book, onSelect } = this.props;
    return (
      <div>
        <Item id={key} onClick={() => onSelect(book)}>
          <Item.Image
            id={key}
            size="small"
            src={book.imgUrl}
            onClick={() => onSelect(book)}
          />

          <Item.Content>
            <Item.Header as="a">{book.title}</Item.Header>
            <Item.Meta>
              <span className="price">{book.price}</span>
            </Item.Meta>
            <Item.Description>
              <p>{book.author}</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </div>
    );
  }
}

export default BookItem;
