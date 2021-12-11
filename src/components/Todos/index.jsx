import TodoItem from '../TodoItem';

const ToDos = ({ todos, completeTodo }) => {
  if (todos.length === 0) {
    return '할 일이 없어요!';
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          onClick={() => completeTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default ToDos;
