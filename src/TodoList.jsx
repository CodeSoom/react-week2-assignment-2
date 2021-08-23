export default function TodoList({ todos, onCompleteButtonClick }) {
  if (!todos.length) {
    return (<div>할 일이 없어요!</div>);
  }

  const handleCompleteButtonClick = (todoIndex) => {
    onCompleteButtonClick(todoIndex);
  };

  return (
    <ol>
      {todos.map((todo, index) => (
        <li key={todo}>
          {todo}
          <button
            type="button"
            onClick={() => handleCompleteButtonClick(index)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
