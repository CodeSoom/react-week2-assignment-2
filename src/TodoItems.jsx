import React from 'react';

function TodoItems({ todoItems }) {
  return (
    <div>
      <p>리스트 결과</p>
      {todoItems.map((value, index) => (
        <div key={value}>
          {index + 1}
          번.
          {value}
          <button type="button">완료</button>
        </div>
      ))}
    </div>
  );
}
export default TodoItems;
