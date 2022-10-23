function TodoForm({ todo, onChange, onSubmit }) {
  const { content } = todo;
  return (
    <form>
      <input
        type="text"
        value={content}
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>추가</button>
    </form>
  );
}

export default TodoForm;
