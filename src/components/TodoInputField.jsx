export default function TodoInputField({
  todoContent,
  handleChangeInput,
  handleClickAddButton,
}) {
  const handleChange = (event) => {
    handleChangeInput(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleChange}
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
