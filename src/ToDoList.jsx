function ToDoList({ todo, onRemoveTask }) {
  if (todo.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return todo.map((item, index) => (
    <div key={item.id}>
      {index + 1}
      .
      {' '}
      {item.data}
      <button
        type="button"
        onClick={() => onRemoveTask({ id: item.id })}
      >
        완료
      </button>
    </div>
  ));
}

export default ToDoList;
