export default function Todos({ todoItem, onDelete }) {
  return (
    <li>
      <span>{todoItem.content}</span>
      <button
        type="button"
        onClick={() => onDelete(todoItem.id)}
      >
        완료
      </button>
    </li>
  );
}
