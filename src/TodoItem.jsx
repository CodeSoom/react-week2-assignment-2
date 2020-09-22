import React from 'react';

export default function TodoItem({
  id, index, todoText, onClick,
}) {
  const styles = {
    listStyle: 'none',
  };

  const handleClick = () => {
    onClick(id);
  };

  return (
    <li style={styles}>
      {`${index}. ${todoText}`}
      <button type="button" onClick={handleClick}>완료</button>
    </li>
  );
}
