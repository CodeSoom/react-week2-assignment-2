import React, { useState } from 'react';

import Form from '../commons/Form';
import List from '../components/List';

function Page() {
  const [list, setList] = useState([]);

  function appendTask(value) {
    setList([...list, value]);
  }

  function detachTask(id) {
    setList(list.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1>To-do</h1>
      <Form appendTask={appendTask} />
      <List list={list} onClick={detachTask} />
    </div>
  );
}

export default Page;
