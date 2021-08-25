export default function Item({ todos, onClick }) {
  return (
    todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button type="button" onClick={() => onClick(todo.id)}>완료</button>
      </li>
    ))
  );
}
