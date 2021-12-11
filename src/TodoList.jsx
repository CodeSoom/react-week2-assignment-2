export default function todoList({ todoState, onClick }) {
  if (!todoState.todos.length) {
    return (<div>할 일이 없어요!</div>);
  }
  return (
    <div>
      <ol>
        {todoState.todos.map((todo) => (
          <div key={todo}>
            <li>
              {todo}
              <button type="button" onClick={() => onClick(todo)}>완료</button>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}
