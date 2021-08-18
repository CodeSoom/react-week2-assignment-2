export default function List({ todos, onClick }) {
  const listItems = todos.length
    ? todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button type="button" onClick={() => onClick(index)}>완료</button>
      </li>
    ))
    : <span>할 일이 없어요!</span>;

  return (
    <ol>
      {listItems}
    </ol>
  );
}
