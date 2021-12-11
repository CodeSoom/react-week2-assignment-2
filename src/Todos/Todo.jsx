export default function Todo({ todo, onDelete }) {
  return (
    <li>
      <span>{todo.name}</span>
      <button type="button" onClick={() => onDelete(todo.id)}>완료</button>
    </li>
  );
}
