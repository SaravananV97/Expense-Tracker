import React, { Component } from 'react';
import TrackerBuilder from "../src/Container/TrackerBuilder/trackerbuilder";
import Landing from "../src/Components/Landing/landing";
import {Route, Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path = "/home" component = {TrackerBuilder} ></Route>
        <Route path = "/" exact component = {Landing} />
    </Switch> 
    );
  }
}

export default App;
