export default function Todo({ todo, onComplete }) {
  return (
    <li>
      <strong>{ todo.title }</strong>
      <button
        type="button"
        onClick={() => onComplete(todo.id)}
      >
        완료
      </button>
    </li>
  );
}
