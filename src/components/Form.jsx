export default function Form({ onSubmit, onChange, inputTodo }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력해주세요." onChange={onChange} value={inputTodo} />
      <button type="submit">추가</button>
    </form>
  );
}
