export default function Form({ onSubmit, onChange, inputValue }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력해주세요." onChange={onChange} value={inputValue} />
      <input type="submit" value="추가" />
    </form>
  );
}
