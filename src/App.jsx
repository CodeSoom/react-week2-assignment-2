import React, { useState } from 'react';

import Form from './Form';
import Ul from './Ul';

export default () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((lists) => [...lists, { id: `${list.length}-${value}`, todo: value }]);
    setValue('');
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleRemove = (e) => {
    setList(list.filter((item) => e.target.dataset.id !== item.id));
  };

  return (
    <div>
      <p>To-do</p>
      <Form value={value} handleSubmit={handleSubmit} handleInput={handleInput} />
      {
        !list.length
          ? <p>할 일이 없어요!</p>
          : <Ul list={list} handleRemove={handleRemove} />
      }
    </div>
  );
};
