import Item from './Item';

const TodoList = ({ todoList, onCompleteTodo }) => {
  if (todoList.length === 0) return <p>할 일이 없어요!</p>;

  return (
    <ol>
      {todoList.map((todo) => (
        <Item key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
      ))}
    </ol>
  );
};
export default TodoList;
