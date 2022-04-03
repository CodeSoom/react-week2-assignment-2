export default function TodoItem({ todoItem, onDelete }) {
  const { name } = todoItem;

  function handleDeleteTodo() {
    onDelete(todoItem);
  }

  return (
    <li>
      {name}
      <button type="submit" onClick={handleDeleteTodo}>
        완료
      </button>
    </li>
  );
}
