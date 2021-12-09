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
      {() => {
        if(todos.length > 0) {
          return <ToDoList list={todos} completeTodo={completeTodo} />
        }

        return '할 일이 없어요!'
      }}
    </div>
  );
};

export default ToDo;
