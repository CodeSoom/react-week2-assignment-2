import Todo from './Todo';

const TodoList = ({ todos, onClick }) => {
  if (!Array.isArray(todos) || (Array.isArray(todos) && todos.length === 0)) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map(({ todo, id }, index) => (
        <Todo id={id} index={index + 1} todo={todo} onClick={onClick} />
      ))}
    </ul>
  );
};

export default TodoList;
