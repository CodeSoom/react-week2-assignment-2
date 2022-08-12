export default function ToDoList({
  todos,
  onClickRemove,
}) {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.value}
          <button
            type="button"
            onClick={() => onClickRemove(todo.id)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
