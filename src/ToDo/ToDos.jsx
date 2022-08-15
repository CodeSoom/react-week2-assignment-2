export default function Todos({ todos, onClickDeleteButton }) {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.content}</span>
          <button type="button" onClick={() => onClickDeleteButton(todo.id)}>완료</button>
        </li>
      ))}
    </ol>
  );
}
