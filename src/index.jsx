import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import AddWorkForm from './components/AddWorkForm';
import WorkList from './components/WorkList';

function App() {
  const [works, setTodos] = useState([]);

  const [work, setTodo] = useState('');

  function handleWorkTextChange(event) {
    setTodo(event.target.value);
  }

  function handleAddWorkButtonClick() {
    setTodos([...works, { key: Date.now(), value: work }]);
    setTodo('');
  }

  function handleCompleteWorkButtonClick(deleteTodoKey) {
    setTodos(works.filter(({ key }) => key !== deleteTodoKey));
  }

  return (
    <div>
      <h1>TO-DO</h1>
      <AddWorkForm
        value={work}
        onClick={handleAddWorkButtonClick}
        onChange={(e) => handleWorkTextChange(e)}
      />

      {
        works.length <= 0 ? <p>할 일이 없어요!</p> : ''
      }

      <WorkList works={works} onClick={handleCompleteWorkButtonClick} />

    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
