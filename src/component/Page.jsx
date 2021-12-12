import React, { useState } from 'react';

import Input from './Input';
import Habits from './Habits';

function Page() {
  const [state, setState] = useState({
    habits: [],
    habitToAdd: '',
  });
  const { habits, habitToAdd } = state;

  const handleHabitToAdd = (value) => {
    console.log(value);
    setState({
      ...state,
      habitToAdd: value
    })
    console.log("handleHabitToAdd", state.habitToAdd);
  }
  const handleDelete = (id) => {
    setState({
      ...state,
      habits: habits.filter((habit) => habit.id !== id),
    });
  };

  const handleSubmit = (habit) => {
    setState({
      ...state,
      habits: [
        habit,
        ...habits,
      ],
    });
  };
  return (
    <div>
      <Input
        onSubmit={handleSubmit}
        onChangeHabitToAdd={handleHabitToAdd}
        habitToAdd={habitToAdd}
      />
      <Habits
        onClickDelete={handleDelete}
        habits={habits}
      />
    </div>

  );
}

export default Page;
