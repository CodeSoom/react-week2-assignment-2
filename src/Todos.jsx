import Todo from './Todo';

export default function Todos({ todos = [], onComplete }) {
  if (!todos.length) {
    return (
      <p>할 일을 입력해주세요</p>
    );
  }

  return (
    <ul>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
          />
        ))
      }
    </ul>
  );
}
