export default function TodoInput({ value, onChange, onSubmit }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={value}
        onChange={handleChange}
        placeholder="할 일을 입력해 주세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}
