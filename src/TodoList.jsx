import React from 'react';

export default function TodoList({ list }) {
  return (
    <ul style={{ marginTop: '20px' }}>
      {
        list.map((item) => (
          <li key={item.id}>
            {item.text}
            <button type="button" style={{ marginLeft: '10px' }}>완료</button>
          </li>
        ))
      }
    </ul>
  );
}
