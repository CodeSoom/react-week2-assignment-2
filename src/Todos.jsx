import Todo from './Todo';

function Todos({ todoItems, onClick }) {
  if (todoItems.length === 0) {
    return (
      <p>
        할 일이 없어요! 🙅‍♀️
      </p>
    );
  }
  return (
    <ol>
      {
        todoItems.map(({ id, todo }) => (
          <Todo
            key={id}
            id={id}
            text={todo}
            onClick={() => onClick(id)}
          />
        ))
      }
    </ol>
  );
}

export default Todos;
