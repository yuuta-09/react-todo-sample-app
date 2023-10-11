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

  return (
    <div className="App">
      <div className="App-title">Todo管理アプリ</div>
      <div className="App-content">
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
