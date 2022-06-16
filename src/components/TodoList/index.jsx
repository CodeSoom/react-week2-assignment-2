export default function TodoList({
  todos,
  compelteTodo,
  emptyTodo,
}) {
  const listStyle = {
    liststyleType: 'demical',
  };

  return (
    <>
      {todos.map(({ todo, id }) => (
        <li style={listStyle} key={id}>
          {todo}
          <button
            type="button"
            onClick={() => compelteTodo(id)}
          >
            완료
          </button>
        </li>
      ))}
      {emptyTodo()}
    </>
  );
}
