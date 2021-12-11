export default function TodoAppender({ todoTitle, onChangeTitle, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoTitle}
        onChange={onChangeTitle}
      />
      <button type="submit">추가</button>
    </form>
  );
}
