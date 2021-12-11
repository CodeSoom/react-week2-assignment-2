import Todo from './Todo';

const TodoList = ({ todos, onClick }) => {
  const style = {
    listStyleType: 'none',
    padding: 0,
  };

  const isEmpty = (arr = []) => arr.length === 0;
  if (isEmpty(todos)) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ul style={style}>
      {todos.map(({ todo, id }, index) => (
        <Todo id={id} index={index + 1} todo={todo} onClick={onClick} />
      ))}
    </ul>
  );
};

export default TodoList;
