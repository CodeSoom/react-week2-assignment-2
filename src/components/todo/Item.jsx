const Item = ({ todo: { id, todo }, onCompleteTodo }) => (
  <li className="todoItem">
    <p>{id}</p>
    <p>{todo}</p>
    <button type="button" onClick={() => onCompleteTodo(todo.id)}>완료</button>
  </li>
);
export default Item;
