import ToDoList from './ToDoList';

export default function ToDo({ toDos, removeToDoHandler, appendToDoHandler }) {
  return (
    <>
      <div>
        <h1>To-do</h1>
        <input type='text' placeholder='할 일을 입력해 주세요.' />
        <AddButton onClick={handleAddTodo} />
      </div>
    </>
  );
}
