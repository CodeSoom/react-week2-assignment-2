import React, { useState } from 'react';
import Input from './Input';

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
    <Input
      onSubmit={handleSubmit}
      onClickDelete={handleDelete}
      habits={habits}
    />
  );
}

export default Page;
