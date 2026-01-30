import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import ToDoList from './components/ToDoList';

export interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}
let todoId = 0;

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedItem = localStorage.getItem("todos");
    if (savedItem) {
      setTodos(JSON.parse(savedItem));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    todos.push({
      id: todoId,
      text: input,
      isChecked: false
    });
    todoId += 1;
    localStorage.setItem("todos", JSON.stringify(todos));
    setInput("");
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

  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <ToDoList todos={todos} handleToggle={(id) => { handleToggle(id) }} />
    </div>
  );
}

export default App;
