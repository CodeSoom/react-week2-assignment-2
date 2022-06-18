export default function TodoList({ todos, onClick }) {
  const style = { display: 'flex', alignItems: 'center', margin: '3px' };

  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ul style={{ margin: '0', padding: '0' }}>
      {todos.map((item) => (
        <li style={style} key={item.id}>
          {item.id}
          .
          {item.toDo}
          <button type="button" onClick={() => onClick(item)}>완료</button>
        </li>
      ))}
    </ul>
  );
}
