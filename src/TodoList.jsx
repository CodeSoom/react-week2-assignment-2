import isEmpty from './utils';

export default function TodoList({ todos, onClick }) {
  if (isEmpty(todos)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <>
      <br />
      {todos.map(({ id, todo }, index) => (
        <div key={id}>
          {index + 1}
          :
          {todo}
          <button type="button" onClick={() => onClick({ id })}>
            완료
          </button>
          <br />
        </div>
      ))}
    </>
  );
}
