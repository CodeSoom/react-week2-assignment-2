export default function InputTodo({
  onClick,
  todoTitle,
  setTodoTitle,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onClick(todoTitle);
  };

  const handleInputChange = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoTitle}
        onChange={handleInputChange}
        placeholder="할 일을 입력해주세요."
      />
      <button
        type="submit"
      >
        추가
      </button>
    </form>
  );
}
