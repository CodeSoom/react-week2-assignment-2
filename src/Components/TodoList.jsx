import Todo from './Todo';

const TodoList = ({ todos, onClickRemove }) => {
  const isEmpty = (arr = []) => arr.length === 0;
  if (isEmpty(todos)) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onClickRemove={onClickRemove}
        />
      ))}
    </ol>
  );
};

export default TodoList;
