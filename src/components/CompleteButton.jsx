export default function CompleteButton({ todoId, setTodos }) {
  function handleClick() {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      완료
    </button>
  );
}
