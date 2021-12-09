import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <div>
        할 일이 없어요!
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={todo} // [질문] 이 경우 동일한 todo일 때 문제가 생기는데, 적절한 key값을 어떻게 설정해주어야 할까요?
          index={index}
          onClick={onClick}
        >
          {todo}
        </Todo>
      ))}
    </div>

  );
}
