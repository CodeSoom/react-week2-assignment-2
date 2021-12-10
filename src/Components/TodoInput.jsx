const inputStyle = {
  fontSize: '15px',
};

const TodoInput = ({ todo, onClick, onChange }) => (
  <>
    <input type="text" style={inputStyle} value={todo} onChange={onChange} />
    <button type="button" onClick={() => onClick(todo)}>추가</button>
  </>
);

export default TodoInput;
