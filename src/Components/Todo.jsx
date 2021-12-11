const Todo = ({
  id, index, todo, onClick,
}) => {
  const style = { padding: '5px 0' };
  return (
    <li key={id} style={style}>
      {`${index}. ${todo}`}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
};

export default Todo;
