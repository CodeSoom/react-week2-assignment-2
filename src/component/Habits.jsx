import React from 'react';
import Habit from './Habit';

function Habits({ onClickDelete, habits }) {
  return (
    <div>
      {
        habits.map((habit) => (
          <Habit
            onClickDelete={onClickDelete}
            habit={habit}
            key={habit.id}
            id={habit.id}
          />
        ))
      }
    </div>
  );
}

export default Habits;
