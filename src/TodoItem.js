const TodoItem = (props) => {
  const itemStyle = {
    display: 'flex', alignItems: 'center',
    padding: 10,
    borderTop: '1px solid #dee2e6',
    textDecoration: props.todo.isFinished===true ? 'line-through' : 'none',
  }
  const checkboxStyle = { cursor: 'pointer' }
  const textStyle = { flex: 1, marginLeft: 10 }
  const btnStyle = { cursor: 'pointer' }
  
  return(
    <div style={itemStyle}>
      <input type="checkbox" checked={props.todo.isFinished} style={checkboxStyle} />
      <div style={textStyle}>{props.todo.text}</div>
      <button style={btnStyle}>削除</button>
    </div>
  );
}

export default TodoItem;