import Input from './Input';
import Button from './Button';

export default function TodoAdd({ addTodo, handleChange, todoItem }) {
  return (
    <form>
      <Input
        type="text"
        name="text"
        placeholder="할 일을 입력해 주세요"
        handleChange={handleChange}
        todoItem={todoItem}
      />
      <Button onClick={addTodo}>
        추가
      </Button>
    </form>
  );
}
