export default function TodoList({ todos, completionTodo }) {
  return (
    <>
      {todos.length !== 0 ? todos.map((todo, idx) => (
        <div key={window.crypto.getRandomValues(new Uint32Array(1))[0]}>
          <p>
            {idx + 1}
            .
            {todo.todo}
            <button
              type="button"
              onClick={() => completionTodo(todo.id)}
            >
              완료

            </button>
          </p>
        </div>
      )) : <p>할 일이 없어요!</p>}
    </>
  );
}
