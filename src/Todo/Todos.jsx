export default function Todos({ todoItem: { content, id }, onDelete }) {
  return (
    <li>
      <span>{content}</span>
      <button
        type="button"
        onClick={() => onDelete(id)}
      >
        완료
      </button>
    </li>
  );
}
