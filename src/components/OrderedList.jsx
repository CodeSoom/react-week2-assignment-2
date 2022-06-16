const todoListArray = [];

export default function OrderedList({
  onClick,
  onSubmit,
  addedTodo,
  deletedTodoNumber,
}) {
  if (addedTodo || false) {
    todoListArray.push(addedTodo);
  }
  todoListArray.splice(deletedTodoNumber, 1);
  return (
    <ol>
      {' '}
      {todoListArray.map((item, index) => (
        <li key={index}>
          <span>{item}</span>{' '}
          <input
            className={index}
            type="button"
            onClick={onClick}
            value="완료"
          />{' '}
        </li>
      ))}
    </ol>
  );
}
