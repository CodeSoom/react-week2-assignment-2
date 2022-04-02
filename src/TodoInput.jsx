import Button from './Button';

export default function Input({ ...rest }) {
  function handleChange(e) {
    const todoValue = e.target.value;
    rest.setTodo(todoValue);
  }

  return (
    <>
      <input
        type="text"
        name="todo"
        onChange={(e) => handleChange(e)}
        value={rest.todo}
        placeholder="할 일을 입력해 주세요"
      />
      <Button
        todo={rest.todo}
        setTodo={rest.setTodo}
        todoList={rest.todoList}
        setTodoList={rest.setTodoList}
      >
        추가
      </Button>
    </>
  );
}
