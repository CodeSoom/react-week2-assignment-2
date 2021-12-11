import Button from './Button';

export default function TodoList({ todoArray, handleFinishTodo }) {
  return (
    <>
      {todoArray.length === 0 ? <p>할 일이 없어요!</p>
        : (
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
        )}
    </>
  );
}
