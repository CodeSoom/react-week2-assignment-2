import { useState } from 'react';

const useStore = () => {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (todoItem) => {
    setTodoItems([...todoItems, todoItem]);
    setCurrentTodo('');
  };

  const removeTodoItem = (id) => {
    setTodoItems(todoItems.filter((todoItem, index) => index !== id));
  };

  return {
    currentTodo,
    setCurrentTodo,
    todoItems,
    setTodoItems,
    addTodoItem,
    removeTodoItem,
  };
};

export default useStore;
