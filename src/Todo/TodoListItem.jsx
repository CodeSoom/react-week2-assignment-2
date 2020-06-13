import React, { useState } from 'react';


export default function TodoListItem() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <p>
        <button type="button" onClick={() => setCount(count + 1)}>
          {`Click me (${count})`}
        </button>
      </p>
      <p>
        {
          [1, 2, 3, 4, 5].map((number) => (
            <button type="button" onClick={() => setCount(count + number)}>
              {number}
            </button>
          ))
        }
      </p>
    </div>
  );
}
