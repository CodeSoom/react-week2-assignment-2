import Todo from '../../classes/Todo';
import useInput from '../../hooks/useInput';

/**
 * @param {{ onAdd?: (todo: Todo) => void }} { onAdd }
 * @return {import('react').ReactElement}
 */
const AddTodoForm = ({ onAdd }) => {
  const { value, setValue, onChange } = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    onAdd?.(new Todo(value));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ display: 'none' }}>Todo 추가</h2>
      <input name="todo" value={value} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodoForm;
