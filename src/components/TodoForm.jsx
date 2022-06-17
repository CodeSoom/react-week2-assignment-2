export default function TodoForm({ onSubmit, todoInput = '', onChange }) {
  function handleSubmit(e) {
    e.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoInput} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}
