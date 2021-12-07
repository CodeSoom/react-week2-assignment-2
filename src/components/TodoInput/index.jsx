const ToDoInput = ({ addTodo }) => {
  const [value, setValue] = React.useState();

  return (
    <div>
      <input
        onChange={({ target: { value } }) => setValue(value)}
        value={value}
        type="text"
        placeholder="할 일을 입력해주세요"
      />
      <button
        onClick={() => addTodo(value)}
        type="button">추가</button>
    </div>
  );
};

export default ToDoInput;
