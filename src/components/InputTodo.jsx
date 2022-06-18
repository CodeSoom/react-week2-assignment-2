export default function InputTodo({ onClick, inputTodo, setInputTodo }) {
  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClick(inputTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputTodo}
        onChange={handleInputChange}
        placeholder="할 일을 입력해주세요."
      />
      <button
        type="submit"
      >
        추가
      </button>
    </form>
  );
}
