const TodoItem = ({ idx, title, onClick }) => (
  <div>
    <span>
      {`${idx}. ${title}`}
      <button type="button" onClick={onClick}>완료</button>
    </span>
  </div>
);

export default TodoItem;
