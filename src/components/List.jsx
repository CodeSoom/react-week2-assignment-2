export default function List({ todos, onClick }) {
  if (!todos.length) {
    return (
      <p>할 일이 없어요!</p>
    );
  }
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => onClick(todo.id)}>완료</button>
        </li>
      )) }
    </ol>
  );
}
