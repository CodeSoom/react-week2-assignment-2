function Todos({ todos, onRemoveTodo }) {
  const isEmptyTodos = todos.length === 0;

  if (isEmptyTodos) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <div>
      {todos.map((todo, todoIdx) => (
        <div>
          <span>
            {`${todoIdx + 1}. ${todo} `}
          </span>
          <button type="button" onClick={() => onRemoveTodo(todoIdx)}>완료</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
