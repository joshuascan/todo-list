import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoForm from "./components/tasks/TodoForm";
import TodoList from "./components/tasks/TodoList";
import ShoppingListCreator from "./components/shopping/ShoppingListCreator";
import ShoppingLists from "./components/shopping/ShoppingLists";

const initialTasks = [
  {
    task: "Clean kitchen",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Update resume",
    id: 1528817084358,
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [shoppingLists, setShoppingLists] = useState([]);

  const addTask = (todo) => {
    const newTask = { ...todo, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  const addShoppingList = (list) => {
    const newList = {
      name: list.name,
      tags: list.tags.split(/[ ,]+/),
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
          <Route path="/tasks">
            <TodoForm tasks={tasks} addTask={addTask} />
            <TodoList tasks={tasks} />
          </Route>
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
