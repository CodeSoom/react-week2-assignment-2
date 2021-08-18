export default function List({ todos, onClick }) {
  const Todo = todos.length
    ? todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button type="button" onClick={() => onClick(todo.id)}>완료</button>
      </li>
    ))
    : <span>할 일이 없어요!</span>;
  return (
    <ol>
      {Todo}
    </ol>
  );
}
