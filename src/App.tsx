import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import ToDoList from './components/ToDoList';

export interface Todo {
  text: string;
}

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
      text: input,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    setInput("");
  };

  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
