import TodoItem from '../TodoItem';

const ToDoList = ({ list, completeTodo }) => (
  <div>
    {list.map((todo) => (
      <TodoItem
        key={todo.id}
        content={todo.content}
        onClick={() => completeTodo(todo.id)}
      />
    ))}
  </div>
);

export default ToDoList;
