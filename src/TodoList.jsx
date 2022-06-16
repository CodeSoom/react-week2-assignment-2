import TodoItem from './TodoItem';

const TodoList = ({ todos, onComplete }) => {
  if (todos.length) {
    return (
      <ol>
        {todos.map(
          (todo) => (
            <TodoItem
              todo={todo}
              onComplete={onComplete}
            />
          ),
        )}
      </ol>
    );
  }

  return <p>할 일이 없어요!</p>;
};

export default TodoList;
