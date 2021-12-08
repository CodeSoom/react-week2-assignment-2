import Todo from '../../classes/Todo';
import useInput from '../../hooks/useInput';

/**
 * @param {{ onAdd?: (todo: Todo) => void }} { onAdd }
 * @return {import('react').ReactElement}
 */
const AddTodoForm = ({ onAdd }) => {
  const { value, onChange } = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    onAdd?.(new Todo(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" value={value} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodoForm;
