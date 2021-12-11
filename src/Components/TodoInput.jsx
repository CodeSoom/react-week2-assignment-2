const TodoInput = ({ todoTitle, onClickAdd, onChange }) => {
  const inputStyle = {
    fontSize: '15px',
  };

  return (
    <>
      <input
        type="text"
        placeHolder="할 일을 입력해 주세요"
        style={inputStyle}
        value={todoTitle}
        onChange={onChange}
      />
      <button type="button" onClick={onClickAdd}>
        추가
      </button>
    </>
  );
};

export default TodoInput;
