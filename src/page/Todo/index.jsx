import { useState, useRef } from 'react';

import ToDoList from '../../components/TodoList';
import ToDoInput from '../../components/TodoInput';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const maxId = useRef(0);

  const addTodo = (content) => {
    const newTodo = {
      content,
      id: maxId.current + 1,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ToDoInput addTodo={addTodo} />
      <ToDoList list={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default ToDo;
