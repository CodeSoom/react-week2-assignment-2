function Todos({ todos, onRemoveTodo }) {
  return (
    <div>
      {todos.length ? (
        todos.map((todo, todoIdx) => (
          <div>
            <span>
              {`${todoIdx + 1}. ${todo} `}
            </span>
            <button type="button" onClick={() => onRemoveTodo(todoIdx)}>완료</button>
          </div>
        ))
      ) : (
        <div>할 일이 없어요!</div>
      )}
    </div>
  );
}

export default Todos;
