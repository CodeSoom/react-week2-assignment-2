export default function TodoList({ todos, onClick }) {
  return (
    todos.map((eachTodo, index) => (
      <div>
        {index + 1}
        .
        {eachTodo}
        <button
          type="button"
          id={index}
          onClick={() => onClick(index)}
        >
          완료
        </button>
      </div>
    ))
  );
}
