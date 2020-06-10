import React, { useState } from 'react';

import Form from './Form';
import Ul from './Ul';

export default () => {
  const [list] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>To-do</p>
      <Form value={value} handleSubmit={handleSubmit} handleInput={handleInput} />
      {
        !list.length
          ? <p>할 일이 없어요!</p>
          : <Ul list={list} />
      }
    </div>
  );
};
