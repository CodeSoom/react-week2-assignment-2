export default function TodoInput({ todo, onChange, onClick }) {
  const handleInput = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  const handleClick = () => {
    onClick();
  };

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
        onClick={handleClick}
      >
        추가
      </button>
    </div>
  );
}
