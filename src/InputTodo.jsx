export default function InputTodo({ onSubmit, onChange, todo }) {
  function handleSubmit(e) {
    e.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        size="20"
        value={todo}
        placeholder="할 일을 입력해주세요"
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}
