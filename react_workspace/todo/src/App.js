import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import BookDetailsContainer from "./container/BookDetailsContainer";
import BookListContainer from "./container/BookListContainer";
//import BookListView from "./view/BookListView";

class App extends Component {
  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <BookListContainer />
        </Grid.Column>
        <GridColumn>
          <BookDetailsContainer />
        </GridColumn>
      </Grid>
    );
  }
}

export default App;
