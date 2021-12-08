function Todo({ todo, onDelete }) {
  const { id, name } = todo;
  return (
    <li key={id}>
      {name}
      <button type="button" onClick={() => onDelete(id)}>완료</button>
    </li>
  );
}

export default Todo;
