import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import BookDetails from "./component/BookDetails";
import BookList from "./component/BookList";
import Books from "./Books";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      selectBook: Books[0],
    };
  }

  handleSelectBook = (book) => {
    this.setState({
      selectBook: book,
    });
  };

  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <BookList books={this.state.books} onSelect={this.handleSelectBook} />
        </Grid.Column>
        <GridColumn>
          <BookDetails book={this.state.selectBook} />
        </GridColumn>
      </Grid>
    );
  }
}

export default App;
