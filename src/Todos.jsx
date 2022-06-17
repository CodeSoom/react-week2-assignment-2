import Todo from './TodoItem';

export default function Todos({ todos = [] }) {
  if (!todos.length) {
    return (
      <p>할 일을 입력해주세요</p>
    );
  }

  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))
      }
    </ul>
  );
}
