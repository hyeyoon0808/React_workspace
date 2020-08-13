import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class BookDetails extends Component {
  render() {
    const { book } = this.props;

    return (
      <div>
        <Card>
          <Image src={book.imgUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{book.title}</Card.Header>
            <Card.Meta>
              <span className="date">
                {book.author}&nbsp;, {book.publisher}
              </span>
            </Card.Meta>
            <Card.Meta>
              <span className="date">{book.price}</span>
            </Card.Meta>
            <Card.Description>{book.introduce}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default BookDetails;
