export default function TodoInput({ todo, onInputChange, onAddButtonClick }) {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onInputChange(value);
  };

  const handleAddButtonClick = () => {
    onAddButtonClick();
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        placeholder="할 일을 입력해 주세요"
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={handleAddButtonClick}
      >
        추가
      </button>
    </div>
  );
}
