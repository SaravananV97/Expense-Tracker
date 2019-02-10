import React, { Component } from 'react';
import TrackerBuilder from "../src/Container/TrackerBuilder/trackerbuilder";
import Landing from "../src/Components/Landing/landing";
import Expenses from "../src/Container/Expenses/expenses"
import Incomes from "../src/Container/Expenses/incomes";
import {Route, Switch} from "react-router-dom";
import Logout from "../src/Components/Landing/logout";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path = "/" exact component = {Landing} />
        <Route path = "/home/:id" component = {TrackerBuilder} ></Route>
        <Route path = "/expenses/:id" component = {Expenses}></Route>
        <Route path = "/incomes/:id" component = {Incomes}></Route>
        <Route path = "/logout" component = {Logout}></Route>
    </Switch> 
    );
  }
}

export default App;
