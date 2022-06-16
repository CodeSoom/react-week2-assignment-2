export default function TodoList({ todos, completionTodo }) {
  return (
    <>
      {todos.length !== 0 ? todos.map(({ todo, id }, idx) => (
        <div key={id}>
          <p>
            {idx + 1}
            .
            {todo}
            <button
              type="button"
              onClick={() => completionTodo(id)}
            >
              완료

            </button>
          </p>
        </div>
      )) : <p>할 일이 없어요!</p>}
    </>
  );
}
