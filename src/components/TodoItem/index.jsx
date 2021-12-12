const TodoItem = ({ content, onClick }) => (
  <div>
    {content}
    <button onClick={onClick} type="button">
      완료
    </button>
  </div>
);

export default TodoItem;
