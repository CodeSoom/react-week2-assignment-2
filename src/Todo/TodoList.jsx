import Todo from './Todo';

const isEmpty = (arr) => arr.length === 0;

export default function TodoList({ todoList, onDelete }) {
  if (isEmpty(todoList)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            todoItem={item}
            onDelete={onDelete}
          />
        ))}
      </ol>
    </div>
  );
}
