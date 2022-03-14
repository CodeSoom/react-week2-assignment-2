import TodoTitle from './TodoTitle';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

export default function Page({
  todoItem, todoArray, handleChange, handleAddTodo, handleFinishTodo,
}) {
  return (
    <>
      <TodoTitle>
        To-do
      </TodoTitle>
      <TodoAdd
        handleAddTodo={handleAddTodo}
        handleChange={handleChange}
        todoItem={todoItem}
      />
      <TodoList
        todoArray={todoArray}
        handleFinishTodo={handleFinishTodo}
      />
    </>
  );
}
