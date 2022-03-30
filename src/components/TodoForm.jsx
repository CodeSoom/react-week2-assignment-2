export default function TodoForm({ input, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={input}
        onChange={onChange}
      />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
