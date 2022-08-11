export default function Todos({ todos, onDeleteButtonClick }) {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.content}</span>
          <button type="button" onClick={() => onDeleteButtonClick(todo.id)}>완료</button>
        </li>
      ))}
    </ol>
  );
}
