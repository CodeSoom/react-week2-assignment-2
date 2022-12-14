import { useState } from 'react';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const updateTodoList = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  };

  const completeTodo = (clickedTodoId) => {
    setTodoList((previousTodoList) => {
      const filteredTodos = previousTodoList.filter((todo) => todo.id !== clickedTodoId);

      return filteredTodos;
    });
  };

  return (
    <article>
      <Title />
      <TodoForm onUpdateTodos={updateTodoList} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </article>
  );
};

export default Todo;
