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

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      habits: [
        {
          id: Date.now() + e.target[0].value,
          text: e.target[0].value,
        },
        ...habits,
      ],
    });
    e.target[0].value = '';
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
