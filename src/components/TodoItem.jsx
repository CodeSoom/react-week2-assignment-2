function TodoItem({ todoItem, onDeleteTodo }) {
  function handleDeleteTodoItem() {
    onDeleteTodo(todoItem.id);
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

export default TodoItem;
