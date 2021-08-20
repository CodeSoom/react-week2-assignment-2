export default function TodoInput({ todo, handleInput, handleAddClick }) {
  return (
    <div>
      <input
        type="text"
        value={todo}
        placeholder="할 일을 입력해 주세요"
        onChange={handleInput}
      />
      <button
        type="button"
        onClick={handleAddClick}
      >
        추가
      </button>
    </div>
  );
}
