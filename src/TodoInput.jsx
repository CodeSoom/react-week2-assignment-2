export default function TodoInput({ text, onChange, onClick }) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          value={text}
          onChange={onChange}
        />
        <button type="button" onClick={onClick}>추가</button>
      </div>
    </>
  );
}
