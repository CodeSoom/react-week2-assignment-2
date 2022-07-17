const ToDoListItem = ({ onClick, item }) => (
  <li>
    {item.text}
    <button type="button" onClick={() => onClick({ finishedItem: item })}>
      완료
    </button>
  </li>
);

export default ToDoListItem;
