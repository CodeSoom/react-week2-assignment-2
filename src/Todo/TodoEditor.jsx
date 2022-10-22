export default function TodoEditor({
  onClick, onChange, todoItem,
}) {
  const { content } = todoItem;
  return (
    <div>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="할 일을 입력해주세요"
        value={content}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
