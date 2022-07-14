const ToDoListItem = ({ onClick, item }) => (
  <li>
    {item}
    <button type="button" onClick={() => onClick({ finishedItem: item })}>
      완료
    </button>
  </li>
);

export default ToDoListItem;
