export default function TodoItem({ todo, onClick }) {
  return (
    <li key={todo.id}>
      {todo.todoName}
      <button type="button" onClick={() => onClick(todo)}>완료</button>
    </li>
  );
}
