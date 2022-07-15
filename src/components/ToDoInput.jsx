const ToDoInput = ({ inputText, onClick, onChange }) => (
  <div>
    <input
      type="text"
      value={inputText}
      placeholder="할 일을 입력해 주세요"
      onChange={onChange}
    />
    <button type="button" onClick={() => onClick({ listText: inputText })}>
      추가
    </button>
  </div>
);

export default ToDoInput;
