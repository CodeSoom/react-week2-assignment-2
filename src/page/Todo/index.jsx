import { useState, useRef } from 'react';

import Todos from '../../components/Todos';
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
      <Todos todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default ToDo;
