import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { ListItemLayout } from './components/ListItemLayout';

export interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}
let todoId = 0;

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doWarn, setWarningMessage] = useState("");

  useEffect(() => {
    const savedItem = localStorage.getItem("todos");
    if (savedItem) {
      setTodos(JSON.parse(savedItem));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "") {
      setWarningMessage("Please add task");
      return;
    }
    todos.push({
      id: todoId,
      text: input,
      isChecked: false
    });
    todoId += 1;
    localStorage.setItem("todos", JSON.stringify(todos));
    setInput("");
    setWarningMessage("");

  };


  const handleToggle = (id: number) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].isChecked = !todos[i].isChecked;
      }
    }
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleDelete = (id: number) => {

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i, 1);
      }

      setTodos([...todos]);
      localStorage.setItem("todos", JSON.stringify(todos));
    };
  }

  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit} />

      {doWarn && <p style={{ color: "red" }}>{doWarn}</p>}

      <ListItemLayout todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
