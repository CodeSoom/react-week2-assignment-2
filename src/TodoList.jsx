export default function TodoList({ todoList }) {
  return (
    todoList && (
      <ol>
        {todoList.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ol>
    )
  );
}
