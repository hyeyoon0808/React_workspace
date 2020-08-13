import React from "react";
// eslint-disable-next-line
import TodoListView from "./component/TodoListView";
// eslint-disable-next-line
import TodoEditFormView from "./component/TodoEditFormView";
// eslint-disable-next-line
import { generateId } from "./IDGenerator";
import TodoEditContainer from "./container/TodoEditContainer";
import TodoListContainer from "./container/TodoListContainer";
import { Grid, Header } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <Grid columns={1}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Schedule</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TodoEditContainer />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TodoListContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
