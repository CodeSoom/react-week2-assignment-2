export default function TodoInput({ onAdd, onChange, inputValue }) {
  function handleAddInput(e) {
    e.preventDefault();
    onAdd();
  }

  function handleChangeInput(e) {
    onChange(e.target.value);
  }

  return (
    <form onSubmit={handleAddInput}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button type="submit">추가</button>
    </form>
  );
}
