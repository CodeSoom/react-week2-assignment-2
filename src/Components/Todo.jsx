const Todo = ({
  id, index, todo, onClick
}) => (
  <li key={id} style={{ padding: '5px 0' }}>
    {`${index}. ${todo}`}
    <button type="button" onClick={() => onClick(id)}>완료</button>
  </li>
);

export default Todo;