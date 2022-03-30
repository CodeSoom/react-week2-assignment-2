import { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function App() {
  const [state, setState] = useState({
    todo: '',
  });

  const { todo } = state;

  function handleChange(e) {
    const todoValue = e.target.value;
    setState({
      todo: todoValue,
    });
  }

  return (
    <div>
      <p>To-do</p>
      <div>
        <Input
          onChange={handleChange}
        />
        <Button>추가</Button>
      </div>
      {todo}
    </div>
  );
}
