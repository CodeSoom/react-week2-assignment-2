const TodoItem = ({ todo }) => (
  <li>
    {todo}
    <button type="button">완료</button>
  </li>
);

export default TodoItem;
