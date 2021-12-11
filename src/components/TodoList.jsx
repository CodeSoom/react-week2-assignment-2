import Button from './Button';

export default function TodoList({ todoArray, handleFinishTodo }) {
  if (todoArray.length === 0) return <p>할 일이 없어요!</p>
  else if (todoArray.length !== 0) {
    return (
      <ol>
        {todoArray.map((todoItem) => (
          <li key={todoItem}>
            {todoItem}
            <Button onClick={() => handleFinishTodo(todoItem)}>
              완료
            </Button>
          </li>
        ))}
      </ol>
    )
  }
}

