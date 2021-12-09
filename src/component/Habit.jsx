import React from 'react';

function Habit({ onClickDelete, habit, id }) {
  return (
    <div>
      {habit}
      <button onClick={() => onClickDelete(id)} type="button">완료</button>
    </div>
  );
}
export default Habit;
