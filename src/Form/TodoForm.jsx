function TodoForm({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
