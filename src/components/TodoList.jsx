export default function TodoList({ toDoData, onClick }) {
  const style = { display: 'flex', alignItems: 'center', margin: '3px' };

  if (toDoData.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ul style={{ margin: '0', padding: '0' }}>
      {toDoData.map((item) => (
        <li style={style} key={item.idx}>
          {item.idx}
          .
          {item.toDo}
          <button type="button" onClick={() => onClick(item)}>완료</button>
        </li>
      ))}
    </ul>
  );
}
