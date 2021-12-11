export default function TodoItem({ todoItem: { id, text }, onClickDeleteTodo }) {
  function handleDeleteTodoItem() {
    onClickDeleteTodo(id);
  }

  return (
    <li>
      {text}
      <button type="button" onClick={handleDeleteTodoItem}>
        완료
      </button>
    </li>
  );
}
