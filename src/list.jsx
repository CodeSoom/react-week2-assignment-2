const List = ({ todos = [], onClick }) => {
  return (
    <>
      {todos.length ? (
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => onClick(index)}> 완료</button>
            </li>
          ))}
        </ol>
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </>
  );
};

export default List;
