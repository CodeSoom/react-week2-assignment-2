export default function TodoList({ todos = [], handleClickDone }) {
  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {todos.map((todoItem) => (
        <li key={todoItem}>
          {todoItem}
          <button
            type="button"
            onClick={() => handleClickDone(todoItem)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
