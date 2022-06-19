export default function TodoList({ todos, onClick }) {
  const style = { margin: '16px', padding: 0 };

  const isEmpty = (arr = []) => arr.length === 0;

  if (isEmpty(todos)) {
    return '할 일이 없어요!';
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
