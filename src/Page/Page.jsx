import React, { useState } from 'react';

import Form from '../commons/Form';
import List from '../components/List';

function Page() {
  const [list, setList] = useState([{ message: '' }]);

  function appendTask(value) {
    setList([...list, value]);
  }
  return (
    <div>
      <h1>To-do</h1>
      <Form appendTask={appendTask} />
      <List />
    </div>
  );
}

export default Page;
