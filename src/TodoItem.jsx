const TodoItem = ({ idx, title, onClick }) => (
  <div>
    <span>
      {`${idx + 1}. ${title}`}
      <button type="button" onClick={onClick}>완료</button>
    </span>
  </div>
);

export default TodoItem;
