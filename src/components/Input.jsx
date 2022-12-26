export default function Input({ todoInput, onChange, onClick }) {
  return (
    <p>
      <input placeholder="할 일을 입력해 주세요" value={todoInput} onChange={onChange} />
      <button type="button" onClick={onClick}>추가</button>
    </p>
  );
}
