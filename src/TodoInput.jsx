export default function TodoInput({ todoState, onChangeTodo, onClick }) {
  function handleChangeTodo(e) {
    onChangeTodo(e.target.value);
  }
  return (
    <>
      <div>
        <form onSubmit={onClick}>
          <input
            type="text"
            placeholder="할 일을 입력해주세요"
            onChange={handleChangeTodo}
            value={todoState.todo}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </>
  );
}
