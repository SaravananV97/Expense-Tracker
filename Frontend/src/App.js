import React, { Component } from 'react';
import TrackerBuilder from "../src/Container/TrackerBuilder/trackerbuilder";
import Landing from "../src/Components/Landing/landing";
import Expenses from "../src/Container/Expenses/expenses"
import {Route, Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path = "/" exact component = {Landing} />
        <Route path = "/home/:id" component = {TrackerBuilder} ></Route>
        <Route path = "/expenses/:id" component = {Expenses}></Route>
    </Switch> 
    );
  }
}

export default App;
