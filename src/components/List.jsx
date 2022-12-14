import Row from './Row';

export default function List({ todoList, onClick }) {
  return (
    <div>
      {
        todoList.length > 0
          ? todoList.map((todo, index) => (
            <Row key={Date.now() + todo} todo={todo} index={index} onClick={onClick} />
          ))
          : '할 일이 없어요!'
      }
    </div>
  );
}
