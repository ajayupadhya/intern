import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompleteId from "./completeids";
import InCompleteId from "./incompleteids";
import Edit from "./edit";
import Welcome from "./welcome";
const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/completeids" component={CompleteId} />
        <Route exact path="/incompleteids" component={InCompleteId} />
      </Switch>
    </Router>
  );
};

export default Home;
