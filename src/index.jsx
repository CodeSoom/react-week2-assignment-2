import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todopage from './pages/Todopage';

function App() {
  const [state, setState] = useState({
    inputText: '',
  });

  const { inputText } = state;

  function handleInput(value) {
    setState({
      inputText: value,
    });
  }

  function handleChange(event) {
    setState({
      inputText: event.target.value,
    });
  }

  console.log('input :', inputText);

  return (
    <Todopage
      inputText={inputText}
      addClick={handleInput}
      handleChange={handleChange}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
