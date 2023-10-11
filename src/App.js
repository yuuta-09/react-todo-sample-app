import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const todos = [
    {
      text: 'React勉強',
      isFinished: false,
    },
    {
      text: 'django rest framework勉強',
      isFinished: true,
    },
    {
      text: 'typescript勉強',
      isFinished: false,
    }
  ];

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
