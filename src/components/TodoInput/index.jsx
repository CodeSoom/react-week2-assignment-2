import { useState } from 'react';

const ToDoInput = ({ addTodo }) => {
  const [todoContent, setTodoContent] = useState('');
  const onClick = (text) => {
    addTodo(text);
    setTodoContent('');
  };

  const onChange = ({ target: { value } }) => {
    setTodoContent(value);
  };

  return (
    <div>
      <input
        onChange={onChange}
        value={todoContent}
        type="text"
        placeholder="할 일을 입력해주세요"
      />
      <button onClick={() => onClick(todoContent)} type="button">
        추가
      </button>
    </div>
  );
};

export default ToDoInput;
