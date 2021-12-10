import React from 'react';
import Habit from './Habit';

function Habits({ onClickDelete, habits }) {
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
