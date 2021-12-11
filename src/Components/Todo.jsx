const Todo = ({
  todo: { id, title }, onClickRemove,
}) => {
  const style = { padding: '5px 0' };
  return (
    <li style={style}>
      {title}
      <button type="button" onClick={() => onClickRemove(id)}>
        완료
      </button>
    </li>
  );
};

export default Todo;
