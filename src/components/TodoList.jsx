import TodoItem from './TodoItem';

export default function TodoList({ todos, onClick }) {
  return (
    <>
      {(todos.length !== 0)
        ? (
          <ol>
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo} onClick={onClick} />)}
          </ol>
        )
        : <p>할 일이 없어요!</p>}
    </>
  );
}
