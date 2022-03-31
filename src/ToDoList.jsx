export default function ToDoList({ todos, onClick }) {
  if (todos) {
    return (
      todos.map((todo, id) => (
        <li key={todo.id}>
          <p>
            {id}
            {todos}
          </p>
          <button
            type="button"
            onClick={onClick(id)}
          >
            완료
          </button>
        </li>
      ))
    );
  }
  if (!todos) {
    return <p> 할일이 없어요!</p>;
  }
}
