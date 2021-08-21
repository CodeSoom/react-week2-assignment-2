export default function Input({ onChange, value, onClick }) {
  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
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
