const TodoList = ({ todoList, onCompleteTodo }) => {
  if (todoList.length === 0) return <p>할 일이 없어요!</p>;

  return (
    <ol>
      {todoList.map((todo) => (
        <li key={todo.id} className="todoItem">
          <p>{todo.todo}</p>
          <button type="button" onClick={() => onCompleteTodo(todo.id)}>완료</button>
        </li>
      ))}
    </ol>
  );
};
export default TodoList;
