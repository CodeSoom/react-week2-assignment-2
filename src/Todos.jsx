import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <div>
        할 일이 없어요!
      </div>
    );
  }

  return (
    <ol>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          todo={todo}
          onClick={() => onClick(todo.id)}
        >
          {todo}
        </Todo>
      ))}
    </ol>
  );
}
