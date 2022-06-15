export default function TodoSubmit({
  todo,
  todoHandler,
  createTodo,
}) {
  return (
    <>
      <input value={todo} onChange={todoHandler} placeholder="할 일을 입력해 주세요" />
      <button disabled={todo === ''} onClick={() => createTodo(todo)} type="button">추가</button>
    </>
  );
}
