import TodoItem from '../TodoItem';

const ToDoList = ({ list, completeTodo }) => {
  if (list.length === 0) {
    return '할 일이 없어요!'
  }

  return (
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
}

export default ToDoList;
