import React, { useState } from 'react';

import AddWorkForm from './AddWorkForm';
import WorkList from './WorkList';

export default function App() {
  const [state, setState] = useState({
    workInput: '',
    works: [],
  });

  const { workInput, works } = state;

  function handleWorkInputChange(value) {
    setState({
      ...state,
      workInput: value,
    });
  }

  function handleAddWorkButtonClick() {
    setState({
      workInput: '',
      works: [...works, { key: Date.now(), value: workInput }],
    });
  }

  function handleCompleteWorkButtonClick(workKey) {
    setState({
      ...state,
      works: works.filter((work) => work.key !== workKey),
    });
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <AddWorkForm
        value={workInput}
        onClick={handleAddWorkButtonClick}
        onChange={(e) => handleWorkInputChange(e)}
      />

      <WorkList works={works} onClick={handleCompleteWorkButtonClick} />
    </div>
  );
}
