import TodoItem from './TodoItem';

const Todos = ({ todoItems = [], onClickComplete }) => {
  if (todoItems.length === 0) {
    return <span>할 일이 없어요!</span>;
  }

  return (
    <>
      {
        todoItems.map(({ id, todo }) => <TodoItem key={`todoItem-${id}`} idx={id} title={todo} onClick={() => onClickComplete(id)} />)
      }
    </>
  );
};

export default Todos;
