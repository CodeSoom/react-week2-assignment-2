export default function Todo({ children }) {
  return (
    <ol>
      {children.length
        ? children
        : '할 일이 없어요!'}
    </ol>
  );
}

Todo.List = ({ todo, onClick }) => (
  <li>
    {todo.value}
    <button type="button" onClick={() => onClick(todo.id)}>완료</button>
  </li>
);
