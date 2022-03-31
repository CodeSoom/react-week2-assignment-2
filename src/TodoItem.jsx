export default function TodoItem({ todoItem, onDelete }) {
  const { name } = todoItem;

  function handleDelete() {
    onDelete(todoItem);
  }

  return (
    <li>
      {name}
      <button type="submit" onClick={handleDelete}>
        완료
      </button>
    </li>
  );
}
