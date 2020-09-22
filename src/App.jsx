import React from 'react';
import Form from './Form';
import Button from './Button';

function App() {
  return (
    <div>
      <h1>To-do</h1>
      <Form />
      <ul>
        <li style={{ listStyleType: 'decimal' }}>
          할일
          <Button type="button">완료</Button>
        </li>
      </ul>
    </div>
  );
}

export default App;
