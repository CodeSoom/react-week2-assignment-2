import { useState } from 'react';

import Todozone from './Todozone';

export default function Page() {
  const [state, setState] = useState({
    todos: [],
    text: '',
  });

  const { todos, text } = state;

  function handleSubmit(event) {
    event.preventDefault();
    setState({
      todos: [...todos, text],
      text: '',
    });
  }

  function deleteTodo(key) {
    const copyState = [...todos];
    const afterFilter = copyState.filter((value) => value !== key);
    setState({
      todos: afterFilter,
      text,
    });
  }

  function handleChange(event) {
    event.preventDefault();
    setState({
      todos,
      text: event.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="할 일을 입력해주세요!" onChange={handleChange} value={text} />
        <input type="submit" value="추가" />
      </form>
      <Todozone todos={todos} onClick={deleteTodo} />
    </div>
  );
}
