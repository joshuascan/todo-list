import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoForm from "./components/tasks/TodoForm";
import TodoList from "./components/tasks/TodoList";
import ShoppingListCreator from "./components/shopping/ShoppingListCreator";
import ShoppingLists from "./components/shopping/ShoppingLists";

function App() {
  const [shoppingLists, setShoppingLists] = useState([]);

  const addShoppingList = (list) => {
    const newList = {
      name: list.name,
      tags: list.tags !== "" ? list.tags.split(/[ ,]+/) : "",
      id: Date.now(),
    };
    setShoppingLists([...shoppingLists, newList]);
  };

  return (
    <Router>
      <div className="App">
        <h1>forgetful.</h1>
        <Navigation />
        <Switch>
          <Route path="/tasks" component={TodoList} />
          <Route path="/shopping">
            <ShoppingListCreator
              shoppingLists={shoppingLists}
              addShoppingList={addShoppingList}
            />
            <ShoppingLists shoppingLists={shoppingLists} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
