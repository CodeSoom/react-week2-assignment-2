import Todo from './Todo';

export default function TodoList({ todos, onClick }) {
  return (
    <ol>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onClick={onClick} />
        ))
      ) : (
        <h3>할 일이 없어요!</h3>
      )}
    </ol>
  );
}
