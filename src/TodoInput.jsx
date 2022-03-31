export default function TodoInput({ onAdd, onChange, inputValue }) {
  function handleAdd(e) {
    e.preventDefault();
    onAdd();
  }

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
