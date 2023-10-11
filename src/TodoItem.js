const TodoItem = ({todo, onRemove}) => {
  const itemStyle = {
    display: 'flex', alignItems: 'center',
    padding: 10,
    borderTop: '1px solid #dee2e6',
    textDecoration: todo.isFinished===true ? 'line-through' : 'none',
  }
  const checkboxStyle = { cursor: 'pointer' }
  const textStyle = { flex: 1, marginLeft: 10 }
  const btnStyle = { cursor: 'pointer' }

  const handleClick = (event) => {
    // ページのリロードを止める
    event.preventDefault();
    onRemove(todo.id);
  }
  
  return(
    <div style={itemStyle}>
      <input type="checkbox" checked={todo.isFinished} style={checkboxStyle} />
      <div style={textStyle}>{todo.text}</div>
      <button style={btnStyle} onClick={handleClick} >削除</button>
    </div>
  );
}

export default TodoItem;