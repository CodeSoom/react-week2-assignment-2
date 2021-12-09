const TodoList = ({ todoList, onClick }) => (
  <>
    {Array.isArray(todoList) && todoList.length > 0 ? (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todoList.map(({ todo, id }, index) => (
          <li key={id} style={{ padding: '5px 0' }}>
            {`${index + 1}. ${todo}`}
            <button type="button" onClick={() => onClick(id)}>완료</button>
          </li>
        ))}
      </ul>
    )
      : <p>할 일이 없어요!</p>}
  </>
);

export default TodoList;
