import { useState } from 'react';

import Todo from '../../models/todo/Todo';
import TodoInput from './TodoInput';

const NewTodoForm = ({ onUpdateTodos }) => {
  const [typingText, setTypingText] = useState('');

  const changeTypingText = (e) => {
    const currentText = e.target.value;
    setTypingText(currentText);
  };

  const submitNewTodo = (e) => {
    e.preventDefault();

    const newTodo = new Todo(typingText);

    if (typingText.length === 0) {
      return;
    }

    onUpdateTodos(newTodo);
    setTypingText('');
  };

  return (
    <form onSubmit={submitNewTodo}>
      <TodoInput typingText={typingText} onUpdateTodos={changeTypingText} />
    </form>
  );
};
export default NewTodoForm;
