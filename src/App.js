import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const tasks = [
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
  return (
    <div className="App">
      <h1>Todo-List</h1>
      <TodoForm tasks={tasks} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
