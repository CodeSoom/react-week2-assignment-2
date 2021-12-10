export default function TodoList({ todoList, onClick }) {
  if (!todoList.length) {
    return (<div>할 일이 없어요!</div>);
  }
  return (
    <div>
      <ol>
        {todoList.map((todo) => (
          <div key={todo}>
            <li>
              {todo.content}
              <button type="button" onClick={() => onClick(todo.id)}>완료</button>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}
