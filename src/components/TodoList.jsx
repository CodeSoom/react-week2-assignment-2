import TodoItem from './TodoItem';

function TodoList({ todoList, onDelete }) {
  return (
    <div>
      {todoList.length === 0
        ? <p>할 일이 없어요!</p>
        : todoList.map((item, i) => (
          <TodoItem
            todoItem={item}
            index={i}
            todoList={todoList}
            key={item.id}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
}

export default TodoList;
