import TodoTitle from './TodoTitle';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function Page({
  todoItem, todoArray, handleChange, addTodo, finishTodo,
}) {
  return (
    <>
      <TodoTitle />
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

export default Page;
