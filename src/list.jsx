const List = ({ todo = [] }) => {
  return (
    <ol>
      {todo.length
        ? todo.map((t, i) => (
            <li key={i}>
              {t} <button> 완료</button>
            </li>
          ))
        : '할 일이 없어요'}
    </ol>
  );
};

export default List;
