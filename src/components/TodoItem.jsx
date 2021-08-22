export default function TodoItem({ todo, onClick }) {
  return (
    <li>
      {todo.todoName}
      <button type="button" onClick={() => onClick(todo)}>완료</button>
    </li>
  );
}
