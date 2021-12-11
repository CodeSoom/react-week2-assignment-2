export default function TodoInput({ todoState, setTodoState, onClick }) {
  function onChangeTodo(e) {
    setTodoState({
      ...todoState,
      todo: e.target.value,
    });
  }
  return (
    <>
      <div>
        <form onSubmit={onClick}>
          <input
            type="text"
            placeholder="할 일을 입력해주세요"
            onChange={onChangeTodo}
            value={todoState.todo}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </>
  );
}
