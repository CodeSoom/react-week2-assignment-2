function TodoInput({ todo, onChangeTodo, onAddTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요!"
        value={todo}
        onChange={onChangeTodo}
      />
      <button type="button" onClick={onAddTodo}>추가</button>
    </div>
  );
}

export default TodoInput;
