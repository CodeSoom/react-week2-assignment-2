import React, { useState } from 'react';

import Form from './Form';
import Ul from './Ul';

export default () => {
  const [list] = useState([]);

  return (
    <div>
      <p>To-do</p>
      <Form />
      {
        !list.length
          ? <p>할 일이 없어요!</p>
          : <Ul list={list} />
      }
    </div>
  );
};
