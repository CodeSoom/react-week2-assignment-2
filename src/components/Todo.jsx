const Todo = ({ content, handleComplete }) => (
  <div style={{ display: 'flex' }}>
    <li style={{ marginRight: 8 }}>{content}</li>
    <button type="button" onClick={handleComplete}>완료</button>
  </div>
);

export default Todo;
