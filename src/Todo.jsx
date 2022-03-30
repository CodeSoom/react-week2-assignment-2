export default function Todo({ children }) {
  return (
    <ol>
      {children.length
        ? children
        : '할 일이 없어요!'}
    </ol>
  );
}

Todo.List = ({ index, value, onClick }) => (
  <li>
    {value}
    <button type="button" onClick={() => onClick(index)}>완료</button>
  </li>
);
