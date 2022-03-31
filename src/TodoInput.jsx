export default function TodoInput({ onAdd, onInput, inputValue }) {
  function handleAdd(e) {
    e.preventDefault();
    onAdd();
  }

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={(e) => onInput(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}
