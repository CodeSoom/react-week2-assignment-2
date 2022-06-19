export default function TodoSubmit({
  inputTodo,
  handleChangeTodo,
  createTodo,
  disabled,
}) {
  return (
    <>
      <input value={inputTodo} onChange={handleChangeTodo} placeholder="할 일을 입력해 주세요" />
      <button disabled={disabled} onClick={() => createTodo(inputTodo)} type="button">추가</button>
    </>
  );
}
