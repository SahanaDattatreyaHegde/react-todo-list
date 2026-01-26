import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState( "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos(input);
    setInput("");
  };

  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} handleSubmit={() => { handleSubmit }} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
