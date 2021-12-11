export default function TodoItem({ todoItem, onClickDeleteTodo }) {
  function handleDeleteTodoItem() {
    onClickDeleteTodo(todoItem.id);
  }

  return (
    <li>
      {todoItem.text}
      <button type="button" onClick={handleDeleteTodoItem}>
        완료
      </button>
    </li>
  );
}
