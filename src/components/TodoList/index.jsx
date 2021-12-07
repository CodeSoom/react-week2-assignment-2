import TodoItem from '../TodoItem';

const ToDoList = ({ list, completeTodo }) => {
  return (
    <div>
      {list.map((todo) => (
        <TodoItem
          content={todo.content}
          onClick={() => completeTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
