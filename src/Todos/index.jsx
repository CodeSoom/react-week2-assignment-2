import Todo from './Todo';

function Todos({ todos, onDelete }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ol>
  );
}

export default Todos;
