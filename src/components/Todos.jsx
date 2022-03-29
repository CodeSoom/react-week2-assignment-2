import Todo from './Todo';

export default function Todos({ todos, setTodos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo todo={todo} setTodos={setTodos} />
      ))}
    </ol>
  );
}
