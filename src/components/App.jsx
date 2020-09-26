import React, { useState } from 'react';

import AddWorkForm from './AddWorkForm';
import WorkList from './WorkList';

export default function App() {
  const [works, setWorks] = useState([]);

  const [work, setWork] = useState('');

  function handleWorkTextChange(value) {
    setWork(value);
  }

  function handleAddWorkButtonClick() {
    setWorks([...works, { key: Date.now(), value: work }]);
    setWork('');
  }

  function handleCompleteWorkButtonClick(workKey) {
    setWorks(works.filter((work) => work.key !== workKey));
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <AddWorkForm
        value={work}
        onClick={handleAddWorkButtonClick}
        onChange={(e) => handleWorkTextChange(e)}
      />

      <WorkList works={works} onClick={handleCompleteWorkButtonClick} />
    </div>
  );
}
