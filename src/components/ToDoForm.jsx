export default function ToDoInputBlock({ todo, onClick, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todo}
        onChange={onChange}
      ></input>
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
