export default function Input({ onChange, value, onClick }) {
  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
      <button
        type="button"
        onClick={onClick}
      >
        추가
      </button>
    </form>
  );
}
