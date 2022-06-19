export default function TodoList({
  todos,
  completeTodo,
  isEmpty,
}) {
  const listStyle = {
    listStyleType: 'demical',
  };

  if (isEmpty(todos)) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <>
      {todos.map(({ todo, id }) => (
        <li style={listStyle} key={id}>
          {todo}
          <button
            type="button"
            onClick={() => completeTodo(id)}
          >
            완료
          </button>
        </li>
      ))}
    </>
  );
}
