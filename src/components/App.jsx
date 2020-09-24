import React, { useState } from 'react';

import AddWorkForm from './AddWorkForm';
import WorkList from './WorkList';

export default function App() {
  const [works, setWorks] = useState([]);

  const [work, setWork] = useState('');

  function handleWorkTextChange(event) {
    setWork(event.target.value);
  }

  function handleAddWorkButtonClick() {
    setWorks([...works, { key: Date.now(), value: work }]);
    setWork('');
  }

  function handleCompleteWorkButtonClick(todoKey) {
    setWorks(works.filter(({ key }) => key !== todoKey));
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <AddWorkForm
        value={work}
        onClick={handleAddWorkButtonClick}
        onChange={(e) => handleWorkTextChange(e)}
      />

      {works.length <= 0 && <p>할 일이 없어요!</p>}

      <WorkList works={works} onClick={handleCompleteWorkButtonClick} />

    </div>
  );
}
