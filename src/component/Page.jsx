import React, { useState } from 'react';

import Input from './Input';
import Habits from './Habits';

function Page() {
  const [state, setState] = useState({
    habits: [],
  });
  const { habits } = state;

  const handleDelete = (id) => {
    setState({
      habits: habits.filter((habit) => habit.id !== id),
    });
  };

  const handleSubmit = (habit) => {
    setState({
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
      />
      <Habits
        onClickDelete={handleDelete}
        habits={habits}
      />
    </div>

  );
}

export default Page;
