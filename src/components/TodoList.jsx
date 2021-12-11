import Button from './Button';

function TodoList({ todoArray, finishTodo }) {
  return (
    <>
      {todoArray.length === 0 ? <p>할 일이 없어요!</p>
        : (
          <ol>
            {todoArray.map((todoItem) => (
              <li key={todoItem}>
                {todoItem}
                <Button onClick={() => finishTodo(todoItem)}>
                  완료
                </Button>
              </li>
            ))}
          </ol>
        )}
    </>
  );
}

export default TodoList;
