import { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const createId = () => Math.random().toString(36).substring(2);
  const initialTodos = [
    { id: createId(), text: 'React勉強', isFinished: false },
    { id: createId(), text: 'django rest framework勉強', isFinished: true },
    { id: createId(), text: 'typescript勉強', isFinished: false }
  ];

  const [todos, setTodos] = useState(initialTodos);
  const handleAdd = (text) => {
    const newTodo = {
      id: createId(),
      text: text,
      isFinished: false,
    }
    setTodos((todos) => [...todos, newTodo]);
  };

  const handleRemove = (deleteId) => {
    setTodos(todos.filter((todo) => { return todo.id !== deleteId }));
  }

  const handleToggle = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isFinished = !(todo.isFinished);
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="App-title">Todo管理アプリ</div>
      <div className="App-content">
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
