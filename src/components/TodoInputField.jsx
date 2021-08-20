export default function TodoInputField({
  todoContent,
  handleChangeInput,
  handleClickAddButton,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleChangeInput}
        value={todoContent}
      />
      <button
        type="button"
        onClick={handleClickAddButton}
      >
        추가
      </button>
    </>
  );
}
