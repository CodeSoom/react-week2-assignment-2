import { useState } from 'react';
import ToDoList from '../../components/TodoList';
import ToDoInput from '../../components/TodoInput';

const ToDo = () => {
  const [list, setList] = useState([]);

  const addTodo = (content) => {
    const maxId = list.length ? Math.max(...list.map(({ id }) => id)) : 0;
    const newTodo = {
      content,
      id: maxId + 1,
    };
    setList([...list, newTodo]);
  };

  const completeTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div>
      <ToDoInput addTodo={addTodo} />
      {list.length ? (
        <ToDoList list={list} completeTodo={completeTodo} />
      ) : (
        '할 일이 없어요!'
      )}
    </div>
  );
};

export default ToDo;
