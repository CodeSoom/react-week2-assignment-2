import { useState } from 'react';
import ToDoList from '../../components/TodoList';
import ToDoInput from '../../components/TodoInput';

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (content) => {
    const maxId = todos.length ? Math.max(...todos.map(({ id }) => id)) : 0;
    const newTodo = {
      content,
      id: maxId + 1,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ToDoInput addTodo={addTodo} />
      {todos.length ? (
        <ToDoList list={todos} completeTodo={completeTodo} />
      ) : (
        '할 일이 없어요!'
      )}
    </div>
  );
};

export default ToDo;
