import TodoItem from './TodoItem';

function TodoList({ todoList, onDelete }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <div>
      {
        todoList.map((item, i) => (
          <TodoItem
            todoItem={item}
            index={i}
            todoList={todoList}
            key={item.id}
            onDelete={onDelete}
          />
        ))
      }
    </div>
  );
}

export default TodoList;
