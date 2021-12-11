import TodoTitle from './TodoTitle';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

export default function Page({
  todoItem, todoArray, handleChange, addTodo, finishTodo,
}) {
  return (
    <>
      <TodoTitle>
        To-do
      </TodoTitle>
      <TodoAdd
        addTodo={addTodo}
        handleChange={handleChange}
        todoItem={todoItem}
      />
      <TodoList
        todoArray={todoArray}
        finishTodo={finishTodo}
      />
    </>
  );
}
