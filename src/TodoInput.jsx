export default function TodoInput({ todoValue, onChange, onAddTodoItem }) {
  return (
    <p>
      <input value={todoValue} onChange={onChange} placeholder="할 일을 입력해 주세요" />
      <button type="button" onClick={() => onAddTodoItem()}>
        추가
      </button>
    </p>
  );
}
