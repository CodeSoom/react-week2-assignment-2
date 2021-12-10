function Todos({ todos, onClickRemove }) {
  const isEmptyTodos = todos.length === 0;

  if (isEmptyTodos) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <div>
      {todos.map((todo, todoIndex) => (
        <div>
          <span>
            {`${todoIndex + 1}. ${todo} `}
          </span>
          <button type="button" onClick={() => onClickRemove(todoIndex)}>완료</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
