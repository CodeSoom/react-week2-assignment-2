import TodoItem from './TodoItem';

// 질문 list에 데이터가 없을 경우 예외처리
export default function TodoList({ list }) {
  return (
    <ul className="todo-list">
      {
        (list ?? []).map((item) => (
          <TodoItem item={item} key={item.id} />
        ))
      }
    </ul>
  );
}
