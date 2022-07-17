import ToDoListItem from './ToDoListItem';

const ToDoList = ({ todoList, onClick }) => {
  if (todoList.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  const listItem = todoList.map((item) => (
    <ToDoListItem
      key={item.id}
      item={item}
      onClick={onClick}
    />
  ));

  return (
    <ol>
      {listItem}
    </ol>
  );
};

export default ToDoList;
