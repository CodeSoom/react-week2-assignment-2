function TodoForm({
  onSubmit,
  todoText,
  handleChange,
}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력해주세요."
          onChange={handleChange}
          value={todoText}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
export default TodoForm;
