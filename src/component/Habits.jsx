import React from 'react';

import Habit from './Habit';

function Habits({ onClickDelete, habits }) {
  if (habits.length === 0) {
    return (
      <div>
        할 일이 없어요!
      </div>
    );
  }
  return (
    <div>
      {
        habits.map((habit) => (
          <Habit
            onClickDelete={() => onClickDelete(habit.id)}
            text={habit.text}
            key={habit.id}
          />
        ))
      }
    </div>
  );
}

export default Habits;
