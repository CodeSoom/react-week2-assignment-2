export default function TodoList({
  todos,
  compelteTodo,
  emptyTodo,
}) {
  const listStyle = {
    listStyleType: 'demical',
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
