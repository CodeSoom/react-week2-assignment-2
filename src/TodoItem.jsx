import React from 'react';

export default function TodoItem({ index, todoText }) {
  const styles = {
    listStyle: 'none',
  };

  return (
    <li style={styles}>
      {`${index}. ${todoText}`}
      <button type="button">완료</button>
    </li>
  );
}
