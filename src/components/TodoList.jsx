import Todo from './Todo';

export default function TodoList({ todos, handleDelete }) {
  return (
    <>
      {todos.length > 0 ? (
        <ol>
          {todos.map((todo) => (
            <Todo todo={todo} handleDelete={() => handleDelete(todo.id)} />
          ))}
        </ol>
      ) : (
        <p>
          할 일이 없어요!
        </p>
      )}
    </>
  );
}
