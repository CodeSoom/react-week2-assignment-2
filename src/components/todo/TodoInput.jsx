const TodoInput = ({ typingText, onUpdateTodos }) => (
  <>
    <input type="text" value={typingText} onChange={onUpdateTodos} placeholder="할 일을 입력해 주세요" />
    <button type="submit">추가</button>
  </>
);
export default TodoInput;
