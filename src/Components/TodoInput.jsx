const inputStyle = {
  fontSize: '15px',
};

const TodoInput = ({ todoTitle, onClickAdd, onChange }) => (
  <>
    <input
      type="text"
      placeHolder="할 일을 입력해 주세요"
      style={inputStyle}
      value={todoTitle}
      onChange={onChange}
    />
    <button type="button" onClick={() => onClickAdd(todoTitle)}>
      추가
    </button>
  </>
);

export default TodoInput;
