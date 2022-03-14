import Input from './Input';
import Button from './Button';

export default function TodoAdd({ handleAddTodo, handleChange, todoItem }) {
  return (
    <form>
      <Input
        type="text"
        name="text"
        placeholder="할 일을 입력해 주세요"
        handleChange={(event) => handleChange(event.target.value)}
        todoItem={todoItem}
      />
      <Button onClick={handleAddTodo}>
        추가
      </Button>
    </form>
  );
}
