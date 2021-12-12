function TodoInput({ todo, onChangeTodo, onClickAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요!"
        value={todo}
        onChange={onChangeTodo}
      />
      <button type="button" onClick={onClickAdd}>추가</button>
    </div>
  );
}

export default TodoInput;
