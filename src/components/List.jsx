import Item from './Item';

export default function List({ todos, onClick }) {
  if (!todos.length) {
    return (
      <p>할 일이 없어요!</p>
    );
  }
  return (
    <ol>
      <Item todos={todos} onClick={onClick} />
    </ol>
  );
}
