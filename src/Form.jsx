export default function Form({
  inputValue,
  onChangeInput,
  onClickAdd,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button
        type="button"
        onClick={onClickAdd}
      >
        추가
      </button>
    </form>
  );
}
