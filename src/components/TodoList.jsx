export default function TodoList({ todos, onClick }) {
  const style = { margin: '16px', padding: 0 };

  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol style={style}>
      {todos.map((item) => (
        <li key={item.id}>
          {item.toDo}
          <button type="button" onClick={() => onClick(item)}>완료</button>
        </li>
      ))}
    </ol>
  );
}
