export default function TodoList({ todos, handleCompleteClick }) {
  if (todos.length < 1) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <ol>
      {todos.map((todo, index) => (
        <li key={todo}>
          {todo}
          <button
            type="button"
            onClick={() => handleCompleteClick(index)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
