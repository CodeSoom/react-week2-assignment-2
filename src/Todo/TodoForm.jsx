export default function TodoForm({
  onSubmit, onChange, todoItem,
}) {
  const { content } = todoItem;

  return (
    <form>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="할 일을 입력해주세요"
        value={content}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>
        추가
      </button>
    </form>
  );
}
