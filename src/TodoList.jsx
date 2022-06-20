import Todo from './Todo';

const TodoList = ({ todos, onComplete }) => {
  if (!todos.length) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {todos.map(
        (todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
          />
        ),
      )}
    </ol>
  );
};

export default TodoList;
