function TodoEditor({ todo, onChange, onClick }) {
  const { content } = todo;
  return (
    <div>
      <input
        type="text"
        value={content}
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
      />
      <button type="button" onClick={() => onClick(content)}>추가</button>
    </div>
  );
}

export default TodoEditor;
