export default function TodoForm({ input, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
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
