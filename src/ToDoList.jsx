export default function ToDoList({ todos, handleClickDoneButton }) {
  if (!todos) {
    return <p> 할일이 없어요!</p>;
  }

  return (
    <ul>
      {todos.map((todo, id) => (
        <li key={todo.id}>
          <p>
            {id}
            .
            {todo.value}
            <button
              type="button"
              onClick={handleClickDoneButton}
            >
              완료
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}
