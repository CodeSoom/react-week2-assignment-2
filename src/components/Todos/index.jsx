import TodoItem from '../TodoItem';

const isEmpty = (array) => array.length === 0;

const ToDos = ({ todos, completeTodo }) => {
  if (isEmpty(todos)) {
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
