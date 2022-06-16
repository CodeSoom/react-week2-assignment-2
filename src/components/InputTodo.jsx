export default function InputTodo({ onClick, inputTodo, setInputTodo }) {
  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') onClick(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputTodo}
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        placeholder="할 일을 입력해주세요."
      />
      <button
        type="button"
        onClick={() => onClick(inputTodo)}
      >
        추가
      </button>
    </div>
  );
}
