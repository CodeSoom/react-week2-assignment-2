export default function ToDoInputField({
  appendToDoHandler, newToDoValue, changeInputHandler, resetInputValue,
}) {
  const onSubmitNewToDo = (event) => {
    event.preventDefault();
    appendToDoHandler(newToDoValue);
    resetInputValue();
  };

  return (
    <form onSubmit={onSubmitNewToDo}>
      <input value={newToDoValue} placeholder="할 일을 입력해 주세요" onChange={changeInputHandler} />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
