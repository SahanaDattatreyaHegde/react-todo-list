import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { ListItemLayout } from './components/ListItemLayout';
import useLocalStorage from './hooks/useLocalStorage';


export interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const [doWarn, setWarningMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "") {
      setWarningMessage("Please add task");
      return;
    }
    todos.push({
      id: todos[todos.length-1].id + 1 ,
      text: input,
      isChecked: false
    });
    // todoId += 1;
    setTodos([...todos]);

    // setTodos(todos);
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
    // setTodos(todos);

  };

  const handleDelete = (id: number) => {

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i, 1);
      }

      setTodos([...todos]);
      // setTodos(todos);

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
