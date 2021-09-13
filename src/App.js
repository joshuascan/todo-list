import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoList from "./components/tasks/TodoList";
import ShoppingLists from "./components/shopping/ShoppingLists";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>forgetful.</h1>
        <Navigation />
        <Switch>
          <Route path="/tasks" component={TodoList} />
          <Route path="/shopping" component={ShoppingLists} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
