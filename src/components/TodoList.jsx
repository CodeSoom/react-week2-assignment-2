export default function TodoList({ todos, setTodos }) {
  const handleClickCompleteButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ol>
      {todos.length === 0
        ? <p>할 일이 없어요!</p>
        : todos.map(({ id, content }) => (
          <li key={id}>
            {content}
            <button
              type="button"
              onClick={() => handleClickCompleteButton(id)}
            >
              완료
            </button>
          </li>
        ))}
    </ol>
  );
}
