export default function TodoForm({ input, onSubmit, onChange }) {
  function handleSubmit(e) {
    e.preventDefault();

    onSubmit();
  }

  function handleChange(e) {
    const { value } = e.target;

    onChange(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="할 일을 입력해 주세요"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
