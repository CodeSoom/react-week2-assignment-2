import { useState } from 'react';

import Button from './Button';
import Todozone from './Todozone';

export default function Content() {
  const [state, setState] = useState({
    todos: [],
  });

  const { todos } = state;

  function addTodo() {
    const inputText = document.getElementById('inputText');
    if (inputText.value) {
      const copyState = [...todos];
      copyState.push(inputText.value);
      setState({
        todos: copyState,
      });
      inputText.value = '';
    }
  }

  function deleteTodo(key) {
    const copyState = [...todos];
    copyState.pop(key); // 배열로 했더니 삭제 기능이..
    setState({
      todos: copyState,
    });
  }

  return (
    <div>
      <input id="inputText" type="Text" placeholder="할 일을 입력해주세요!" />
      <Button onClick={addTodo}>
        save
      </Button>
      <Todozone todos={todos} onClick={deleteTodo} />
    </div>
  );
}
