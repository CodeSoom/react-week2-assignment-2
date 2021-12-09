import TodoItem from './TodoItem';

function Todos({ todos, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <p>
        <b>할 일이 없어요!</b>
      </p>
    );
  }

  return (
    <ol>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ol>
  );
}

export default Todos;
