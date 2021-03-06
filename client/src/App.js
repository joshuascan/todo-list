import React from "react";
import "./Sass/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/users/Login";
import Registration from "./components/users/Registration";
import TodoList from "./components/tasks/TodoList";
import ShoppingLists from "./components/shopping/ShoppingLists";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>forgetful.</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/tasks" component={TodoList} />
          <Route path="/shopping" component={ShoppingLists} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
