const TodoList = ({ todoList }) => (
  <>
    {Array.isArray(todoList) && todoList.length > 0 ? (
      <ul style={{ listStyleType: 'none' }}>
        {todoList.map(({ todo, id }) => (
          <li key={id}>{`${id}. ${todo}`}</li>
        ))}
      </ul>
    )
      : <p>할일이 없어요!</p>}
  </>
);

export default TodoList;
