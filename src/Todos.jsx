export default function Todos({ todoList, onClick }) {
  if (!todoList.length) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {todoList.map((todo) => (
        <li>
          {todo.value}
          <button type="button" onClick={() => onClick(todo.id)}>
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
