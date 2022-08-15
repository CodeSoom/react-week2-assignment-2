export default function Form({
  inputValue,
  onChangeInput,
  onClickAdd,
}) {
  return (
    <form
      onSubmit={onClickAdd}
    >
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button
        type="submit"
      >
        추가
      </button>
    </form>
  );
}
