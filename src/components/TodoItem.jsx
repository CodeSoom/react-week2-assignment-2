function TodoItem({ todoItem, index, onDelete }) {
  const { id, content } = todoItem;

  return (
    <div>
      <span>
        {index + 1}
        .
      </span>
      <span>{content}</span>
      <button type="button" onClick={() => onDelete(id)}>완료</button>
    </div>
  );
}

export default TodoItem;
