export default function TodoList({ todos, compelteTodo }) {
  const listStyle = {
    liststyleType: 'demical',
  };

  return (
    <>
      {todos.length !== 0 ? todos.map(({ todo, id }) => (
        <li style={listStyle} key={id}>
          {todo}
          <button
            type="button"
            onClick={() => compelteTodo(id)}
          >
            완료
          </button>
        </li>
      )) : <p>할 일이 없어요!</p>}
    </>
  );
}
