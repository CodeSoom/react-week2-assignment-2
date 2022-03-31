const AddTodoForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input name="new-todo" type="text" placeholder="할 일을 입력해 주세요" />
    <button type="submit">추가</button>
  </form>
);

export default AddTodoForm;
