export default function TodoList({ todos, onClick }) {
  return (
    <>
      {todos.length !== 0
        ? (
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.todoName}
                <button type="button" onClick={() => onClick(todo)}>완료</button>
              </li>
            ))}
          </ol>
        )
        : <p>할 일이 없어요!</p>}
    </>
  );
}
