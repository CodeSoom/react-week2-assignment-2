import React from 'react';

export default function TodoItem({ id, todoText }) {
  const styles = {
    listStyle: 'none',
  };

  return (
    <li style={styles} id={id}>
      {`${id}.${todoText}`}
      <button type="button">완료</button>
    </li>
  );
}
