const TodoList = ({ todos, onClick }) => {
  if (!Array.isArray(todos) || (Array.isArray(todos) && todos.length === 0)) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map(({ todo, id }, index) => (
        <li key={id} style={{ padding: '5px 0' }}>
          {`${index + 1}. ${todo}`}
          <button type="button" onClick={() => onClick(id)}>완료</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
