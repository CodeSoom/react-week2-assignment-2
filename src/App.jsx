import React from 'react';
import Form from './Form';

function App() {
  return (
    <div>
      <h1>To-do</h1>
      <Form />
      <ul>
        <li style={{ listStyleType: 'decimal' }}>
          할일
          <button type="button">완료</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
