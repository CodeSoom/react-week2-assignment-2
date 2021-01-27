import React, { useState } from 'react';

import Form from '../commons/Form';
import List from '../components/List';

function Page() {
  const [list, setList] = useState([]);

  function appendTask(value) {
    setList([...list, value]);
  }
  return (
    <div>
      <h1>To-do</h1>
      <Form appendTask={appendTask} />
      <List list={list} />
    </div>
  );
}

export default Page;
