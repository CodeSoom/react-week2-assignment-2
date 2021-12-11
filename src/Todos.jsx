import { isEmptyArray } from '../utils';

function Todos({ todos, onClickRemove }) {
  if (isEmptyArray(todos)) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo}>
          <span>
            {`${index + 1}. ${todo} `}
          </span>
          <button type="button" onClick={() => onClickRemove(index)}>완료</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
