import Todo from './TodoItem';

export default function TodoItems({ todoItems = [] }) {
  if (!todoItems.length) {
    return (
      <p>할 일을 입력해주세요</p>
    );
  }

  return (
    <ul>
      {
        todoItems.map((item) => (
          <Todo todo={item} key={item.id} />
        ))
      }
    </ul>
  );
}
